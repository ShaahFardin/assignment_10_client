import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Checkout = () => {
    return (
      <div
        style={{
          width: "400px",
          marginTop: "150px",
          marginLeft: "100px",
        }}
      >
        <Form>
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
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Label>Expectation from the course</Form.Label>
          <Form.Range />

          <Button variant="primary" type="submit" style={{ width: "400px" }}>
            Pay
          </Button>
        </Form>
      </div>
    );
};

export default Checkout;