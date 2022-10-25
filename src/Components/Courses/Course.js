import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Course = ({ course }) => {
  console.log(course);
  const { title, image_url } = course;
  return (
    <div className="">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{height:"200px"}} variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Course Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
