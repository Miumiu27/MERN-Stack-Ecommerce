import React from "react";
import { Container } from "reactstrap";
import "../../styles/CommonSection5.css";

const CommonSection5 = ({ title }) => {
  return (
    <section className="CommonSection5">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection5;
