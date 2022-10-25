import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
    const provier = new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
        googleSignIn(provier)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>{
            console.error(error)
        })
    }

  return (
    <div
      style={{
        width: "400px",
        marginTop: "100px",
      }}
    >
      <Form className="align-items-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-muted  mb-3">
            <p>
              Not an user yet? <Link to="/registration">Register</Link>
            </p>
          </Form.Text>
        </Form.Group>
        <Button style={{ width: "400px" }} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="mt-5">
        <ListGroup as="ul">
          <Button onClick={handleGoogleSignIn} variant="light" className="mb-2">
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
