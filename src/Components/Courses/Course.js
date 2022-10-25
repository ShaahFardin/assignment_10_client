import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const Course = ({ course }) => {
  console.log(course);
  const { title, image_url, _id } = course;
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "200px" }} variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text></Card.Text>
          <Link to={`/courseDetails/${_id}`}>
            <Button variant="primary">Course Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
