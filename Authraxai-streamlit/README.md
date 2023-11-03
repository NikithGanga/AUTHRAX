# LLM-Based-PDF-ChatBot
Chat with a PDF-enabled bot: Extract text from PDFs, segment it, and chat with a responsive AI – all within an intuitive Streamlit interface.


This Python project leverages the Streamlit framework to create an interactive application that allows users to have natural language conversations with a chatbot while referencing multiple PDF documents. The main components and functionality of the code include:

PDF Text Extraction: The code reads multiple PDF documents, extracts the text content from each document, and combines it into a single text corpus for analysis.

Text Chunking: The extracted text is divided into smaller, manageable text chunks using a character-based text splitter. This is done to facilitate more efficient processing.

Text Embeddings: The code utilizes OpenAI's text embeddings to convert the text chunks into numerical representations suitable for similarity analysis and retrieval.

Conversational Retrieval Chain: The application employs a conversational retrieval chain powered by a language model (either ChatOpenAI or HuggingFace Hub), enabling users to engage in natural language conversations. The conversation history is stored and managed to maintain context.

User Interaction: Users can input questions related to the content of the uploaded PDF documents. The chatbot responds to these questions based on the information within the PDFs and the conversation history.

Streamlit Interface: The code provides a user-friendly interface powered by Streamlit, allowing users to upload their PDF documents, ask questions, and receive responses from the chatbot.

This project is designed to make it easier for users to extract information from PDF documents and engage in dynamic conversations, creating an efficient and user-friendly way to access and interact with PDF content.

This chatbot also remembers the context of previous quetion to answer next one (Can see on one of the screenshot)

When I started working on the project I didn't had access to OpenAI API so sticked with models available on HuggingFace.
It gives good results but just takes so much time for embedding and retriving answers.
