import React, { useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import { Container, Row, Col } from "react-bootstrap";

const TasksPage = (props: any) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (!isAuthenticated) props.history.push("/");
    console.log("load tasks");
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <Container>
      <Row className="text-center mt-3">
        <Col sm={12} md={4}>
          <h1>Tasks Page</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default TasksPage;
