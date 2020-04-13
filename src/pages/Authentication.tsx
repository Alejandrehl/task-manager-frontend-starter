import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth/authContext";
import {
  Container,
  Col,
  Alert,
  Jumbotron,
  Button,
  Form,
} from "react-bootstrap";

const AuthenticationPage = (props: any) => {
  const authContext = useContext(AuthContext);
  const {
    isAuthenticated,
    error,
    cleanError,
    token,
    loadUser,
    login,
    register,
    success,
    cleanSuccess,
  } = authContext;

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) loadUser();
    if (isAuthenticated) props.history.push("/tasks");
    if (success) login({ username, password });
    // eslint-disable-next-line
  }, [isAuthenticated, token, success]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (isLogin) return login({ username, password });
    return register({ username, password });
  };

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
    if (error) cleanError();
  };

  return (
    <div style={styles.container} className="bg-light">
      <Container>
        <Jumbotron>
          <h1 className="text-center">Task Manager</h1>
          <Col sm={{ span: 6, offset: 3 }}>
            {success && (
              <Alert variant="success" onClose={cleanSuccess} dismissible>
                {success}
              </Alert>
            )}
            {error && (
              <Alert variant="danger" onClose={cleanError} dismissible>
                {error}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ejemplo: AlejandroH."
                  required
                  onChange={(e: any) => setUsername(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Ejemplo: alejandro123
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  required
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <Form.Text className="text-muted">
                  <ul>
                    <li>
                      La contraseña debe contener al menos una letra mayúscula
                    </li>
                    <li>
                      La contraseña debe contener al menos una letra minúscula
                    </li>
                    <li>
                      La contraseña debe contener al menos un número o un
                      caracter especial
                    </li>
                  </ul>
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                {isLogin ? "Acceder" : "Registrar"}
              </Button>
            </Form>
            <Button id="submit-button" variant="link" onClick={handleIsLogin}>
              {isLogin ? "Registrar" : "Acceder"}
            </Button>
          </Col>
        </Jumbotron>
      </Container>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default AuthenticationPage;
