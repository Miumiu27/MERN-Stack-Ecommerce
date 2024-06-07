import React, { useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile_image, setProfile_image] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfile_image(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile_image", profile_image);

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Traitement de la réponse de l'API après l'inscription réussie

        // Redirection ou autre logique après l'inscription réussie
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error(errorData); // Traitement de l'erreur de l'API en cas d'échec de l'inscription
      }
    } catch (error) {
      console.error(error); // Traitement des erreurs liées à la requête Fetch
    }
  };

  return (
    <Helmet title="Sign up">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Creer un compte</h3>

              <Form className="auth__form" onSubmit={handleSubmit}>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Nom d'utilisation"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>

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
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="password"
                    placeholder="Entrer votre mot de passe"
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

                <FormGroup className="form__group">
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleImageUpload}
                  />
                </FormGroup>

                <button type="submit" className="btn_submit">
                  Creer un compte
                </button>
                <p>
                  Avez-vous déjà un compte? <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
