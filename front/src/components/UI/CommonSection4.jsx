import React from "react";
import { Container } from "reactstrap";
import "../../styles/CommonSection4.css";

const CommonSection4 = ({ title }) => {
  return (
    <section className="CommonSection4">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection4;
