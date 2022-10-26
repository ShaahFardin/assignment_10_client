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
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState('');
  const { googleSignIn, userLogin } = useContext(AuthContext);
    const provier = new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
        googleSignIn(provier)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>{
            console.error(error);
            
        })
    }
    const handleManualSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password) ;

        userLogin(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            
        })
        .catch((error)=>{
            console.error(error);
            setError(error.message);
        });
    }
    
  return (
    <div
      style={{
        width: "400px",
        marginTop: "150px",
        marginLeft:"100px"
      }}
    >
      <Form className="align-items-center" onSubmit={handleManualSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-muted  mb-3">
            <p>
              Not an user yet? <Link to="/registration">Register</Link>
            </p>
          </Form.Text>
        </Form.Group>
        
          <Form.Text className="text-danger mb-5">
          {error}
          </Form.Text>
       
        <Button className="mt-3" style={{ width: "400px" }} variant="primary" type="submit">
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
