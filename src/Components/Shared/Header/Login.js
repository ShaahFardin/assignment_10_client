import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { FcGoogle } from "react-icons/fc";
import { FaGithub} from "react-icons/fa";

const Login = () => {
  return (
    <div
      style={{
        width: "400px",
        marginTop: "100px",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-muted  mb-3">
            <p>
              Not an user yet? <Link>Register</Link>
            </p>
          </Form.Text>
        </Form.Group>
        <Button style={{ width: "400px" }} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="mt-5">
        <ListGroup as="ul">
          <Button variant="light" className="mb-2">
            <FcGoogle className="me-3"></FcGoogle>
            Continue with Google
          </Button>
          <Button variant="light">
            <FaGithub className="me-3"></FaGithub>
            Continue with Github
          </Button>
        </ListGroup>
      </div>
    </div>
  );
};

export default Login;
