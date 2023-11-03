import React from "react";
import { Button, Row, Col } from "reactstrap";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Authrax</h1>
          <h3 className="d-none d-sm-block">
          Transforming Real-Life Agreements with Authrax's Blockchain Contracts
          </h3>
              
          <Button
          color="primary"
          href="/profile-page"
          rel="noopener noreferrer"
          target="_blank"
          >Consult a lawyer</Button>

          <Button
          color="primary"
          href="https://au-thraxai.streamlit.app/"
          rel="noopener noreferrer"
          target="_blank"
          >Authrax AI</Button>
        </div>
        
      </Container>
    </div>
  );
}
