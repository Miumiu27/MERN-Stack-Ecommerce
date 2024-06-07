import React from "react";
import { Container } from "reactstrap";
import "../../styles/CommonSection6.css";

const CommonSection6 = ({ title }) => {
  return (
    <section className="CommonSection6">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection6;
