import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import utils from "../components/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.message === "Connexion réussie.") {
        {
          /*const role = await utils.getUserRole();
        if (role === "admin") {
          navigate("/dashboard");
        } else if (role === "client") {
          navigate("/checkout");
        } else {
          navigate("/");
        }*/
        }
        navigate("/dashboard");
      } else {
        console.error("Erreur lors de la connexion :", data.error);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Login</h3>

              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Entrer votre email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group password-field">
                  {/*<input
                    type="password"
                    placeholder="Entrer votre mot de passe"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />*/}
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="Entrer votre mot de passe"
                    autoComplete="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=""
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="password-icon"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="password-icon"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </FormGroup>

                <button
                  type="button"
                  className="btn_submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p>
                  N'avez-vous pas encore un compte?{" "}
                  <Link to="/signup">Créer un compte</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
