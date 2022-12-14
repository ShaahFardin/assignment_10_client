import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, image_url, _id } = course;
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem"}}>
        <Card.Img style={{ height: "200px" }} variant="top" src={image_url} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
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
