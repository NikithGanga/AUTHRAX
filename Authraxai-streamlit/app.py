import streamlit as st
from dotenv import load_dotenv
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import Pinecone
from langchain.embeddings import OpenAIEmbeddings, HuggingFaceInstructEmbeddings
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.memory.buffer import ConversationBufferMemory
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain.document_loaders import DirectoryLoader
from langchain.llms import OpenAI
from streamlit_option_menu import option_menu

# from streamlit_chat import message
import os
import time
import pinecone 
import base64
import requests
from streamlit_lottie import st_lottie
from PIL import Image
import json
import pytesseract
import transformers
from transformers import pipeline

from htmltemplate import css, bot_template, user_template
from langchain.prompts import SystemMessagePromptTemplate,HumanMessagePromptTemplate,ChatPromptTemplate,MessagesPlaceholder
from langchain.llms import HuggingFaceHub
import uuid
from io import BytesIO
import openai
import time
from streamlit_option_menu import option_menu
load_dotenv()


PINECONE_API_KEY = '13496d7a-9869-4c66-befc-e98854e22a4a'
PINECONE_ENV = 'gcp-starter'
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
os.environ['OPENAI_API_KEY'] = OPENAI_API_KEY
openai.api_key =OPENAI_API_KEY
@st.cache_resource

# Custom CSS to inject into the Streamlit app
def local_css(file_name):
    with open(file_name) as f:
        st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)
st.set_page_config(
    page_title="Authrax Assistant",
    page_icon=":scales:",
    layout="wide",
    initial_sidebar_state="expanded",
    )

# Load the custom CSS
local_css("style.css")
st.markdown("""
    <h1 style='text-align: center; color: #4A4A4A; font-size: 40px;'>
        Authrax AI Assistant
    </h1>
    """, unsafe_allow_html=True)


llm1 = OpenAI()
embeddings = OpenAIEmbeddings(openai_api_key=os.environ['OPENAI_API_KEY'])


    
def retrieval_answer(query):
    llm = OpenAI()

    pinecone.init(
        api_key=PINECONE_API_KEY,
        environment=PINECONE_ENV
    )
    index_name = "authrax"
    embeddings_db = Pinecone.from_existing_index(
        index_name,
        embeddings
    )
    qa = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type='stuff',
        retriever = embeddings_db.as_retriever()
    )
    query = query
    result = qa.run(query)
    if "I'm sorry" in result or "I don't know" in result:
        # Call the function to get the response from ChatGPT 3.5
        result = generate_response(query)
    st.write(result)
    return result


with st.sidebar:
    selected_section = option_menu('Authrax Assistant', [ 'Chat with your contracts','Query our Legal Database'],
        icons=['activity','search'],menu_icon='intersect', default_index=0)

if __name__ == '__main__':
    if "conversation" not in st.session_state:
        st.session_state.conversation = None
    if "chat_history" not in st.session_state:
        st.session_state.chat_history = None

def generate_response(prompt):
    try:
        completions = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=1024,
            temperature=0.5
        )
        message = completions['choices'][0]['message']['content']
        return message
    except openai.error.InvalidRequestError as e:
        print(f"Invalid request: {e}")
        return None
 
    
def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text


def get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=0,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks


def get_vectorstore(text_chunks):
    embeddings = OpenAIEmbeddings()
    # embeddings = HuggingFaceInstructEmbeddings(model_name="hkunlp/instructor-xl")
    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    return vectorstore

def simple_conversation_handler(input_dict):
    user_question = input_dict['question']
    # This is where you would add logic to generate a response based on the user's question.
    # For now, it just echoes the question.
    response = {
        'chat_history': [
            {"role": "user", "content": user_question},
            {"role": "assistant", "content": f"I received your question: {user_question}"}
        ]
    }
    return response


def get_conversation_chain(vectorstore):
    llm = ChatOpenAI()
    # llm = HuggingFaceHub(repo_id="google/flan-t5-xxl", model_kwargs={"temperature":0.5, "max_length":512})

    memory = ConversationBufferMemory(
        memory_key='chat_history', return_messages=True)
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    return conversation_chain


def handle_userinput(user_question):
    # st.session_state.messages.append({"role": "user", "content": use_question})
    response = st.session_state.conversation({'question': user_question})
    st.session_state.chat_history = response['chat_history']

    for i, message in enumerate(st.session_state.chat_history):
        if i % 2 == 0:
            st.write(user_template.replace(
                "{{MSG}}", message.content), unsafe_allow_html=True)
        else:
            st.write(bot_template.replace(
                "{{MSG}}", message.content), unsafe_allow_html=True)
            
def handle_userinput1(user_question):
    st.session_state.messages.append({"role": "user", "content": user_question})
    
    # Get the response from the conversation model
    response = st.session_state.conversation({'question': user_question})
    
    # Update the chat history in the session state
    st.session_state.chat_history = response['chat_history']

    # Iterate through the chat history and display the messages
    for i, message in enumerate(st.session_state.chat_history):
        # Check if the message is from the user
        if i % 2 == 0:
            # Display the user's message using the user template
            st.write(user_template.replace("{{MSG}}", message.content), unsafe_allow_html=True)
        else:
            # Display the bot's response using the bot template
            st.write(bot_template.replace("{{MSG}}", message.content), unsafe_allow_html=True)

def message(content, key=None, is_user=False):
    # You can customize this function to display messages differently based on whether it's a user or assistant message
    if is_user:
        with st.chat_message("user", key=key):
            st.write(content)
    else:
        with st.chat_message("assistant", key=key):
            st.write(content)



if selected_section == "Chat with your contracts":
    load_dotenv()
    st.markdown("<div style='text-align: center;'><h1>Chat with your contract</h1></div>", unsafe_allow_html=True)

    st.write(css, unsafe_allow_html=True)

    # Initialize chat_history as an empty list if it doesn't exist
    if "chat_history" not in st.session_state:
        st.session_state.chat_history = []

    # Move the PDF uploader to the main screen
    pdf_docs = st.file_uploader(
        "Upload your PDFs here and click on 'Process'", accept_multiple_files=True)
    if st.button("Process"):
        with st.spinner("Processing"):
            # get pdf text
            raw_text = get_pdf_text(pdf_docs)

            # get the text chunks
            text_chunks = get_text_chunks(raw_text)

            # create vector store
            vectorstore = get_vectorstore(text_chunks)

            # create conversation chain
            st.session_state.conversation = get_conversation_chain(vectorstore)

    # # Display the conversation history
    # if st.session_state.chat_history is not None:
    #     for message in st.session_state.chat_history:
    #         st.write(message)
    # Place the text input box at the bottom of the conversation
    user_question = st.text_input("What would you like to know about your contract?")
    if user_question:
        handle_userinput(user_question)




if selected_section == "Query our Legal Database":
    st.title("Legal Larry")

    # Initialize session state variables if they don't exist
    if "conversation" not in st.session_state:
        st.session_state.conversation = simple_conversation_handler
    if "chat_history" not in st.session_state:
        st.session_state.chat_history = None
    if 'generated' not in st.session_state:
        st.session_state['generated'] = []
    if 'past' not in st.session_state:
        st.session_state['past'] = []
    if 'messages' not in st.session_state:  # Initialize messages only once
        st.session_state.messages = [{"role": "assistant", "content": "Hi, I have been trained in Indian Law. Please state your query?"}]

    prompt = st.chat_input("Enter your message:")
    if prompt:  # Append to messages in session state
        st.session_state.messages.append({"role": "user", "content": prompt})
    
    # Display all messages
    for message in st.session_state.messages:
        if message["role"] == "user":
            with st.chat_message("user"):
                st.write(message["content"])
        else:
            with st.chat_message("assistant"):
                st.write(message["content"])

    if prompt and st.session_state.messages[-1]["role"] != "assistant":
        with st.chat_message("assistant"):
            with st.spinner("Thinking..."):
                response = retrieval_answer(prompt)
                st.session_state.messages.append({"role": "assistant", "content": response})
                st.session_state['past'].append(prompt)
                st.session_state['generated'].append(response)




