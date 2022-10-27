import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const courseDeails = useLoaderData();
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: "400px",
          marginTop: "150px",
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h5>Selected Course : {courseDeails.title}</h5>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="$ Amount" />
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
            <Form.Label>Choose files</Form.Label>
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
    </div>
  );
};

export default Checkout;
