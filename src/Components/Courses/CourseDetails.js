import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {} from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { Image } from "react-bootstrap";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, details, image_url, author, rating, total_view } =
    courseDetails;
  console.log(courseDetails);
  return (
    <div>
      <h1>Heloo</h1>
      <h3>{courseDetails?.title}</h3>
      <Card className="t">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <div><Image style={{width:"40px"}} roundedCircle src={author?.img}></Image>{author?.name}</div>

            <div>
              <FaEye className="me-2"></FaEye>
              {total_view}
            </div>
          </div>
        </Card.Header>
        <Card.Img className="card-img-top" src={image_url}></Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div>{rating?.number}</div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
