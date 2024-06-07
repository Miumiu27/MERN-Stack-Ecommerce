import React from "react";
import { Container } from "reactstrap";
import "../../styles/CommonSection2.css";

const CommonSection2 = ({ title }) => {
  return (
    <section className="CommonSection2">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection2;
