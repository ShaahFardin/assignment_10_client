import React from 'react';
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Registratioin = () => {
    const {createNewUser} = useContext(AuthContext);
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, photoURL,email, password);

        createNewUser(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    return (
      <div
        style={{
          width: "400px",
          marginTop: "100px",
        }}
      >
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="your@email.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Text className="text-muted  mb-3">
            <p>
              Not an user yet? <Link to="/login">Login</Link>
            </p>
          </Form.Text>
          <Button variant="primary" type="submit" style={{ width: "400px" }}>
            Register
          </Button>
        </Form>
      </div>
    );
};

export default Registratioin;