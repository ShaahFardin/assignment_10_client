import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRadiation } from "react-icons/fa";
import {} from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Image } from "react-bootstrap";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, details, image_url, author, rating, total_view, _id } =
    courseDetails;
  console.log(courseDetails);
  return (
    <div style={{ marginTop: "100px" }}>
      <h3>{courseDetails?.title}</h3>
      <Card>
        <Card.Header>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ color: "black" }}
          >
            <div>
              <Image
                className="me-2"
                style={{ width: "40px", height: "40px" }}
                roundedCircle
                src={author?.img}
              ></Image>
              {author?.name}
            </div>
            <Button variant="light">Download PDF</Button>

            <div>
              <FaEye className="me-2"></FaEye>
              {total_view}
            </div>
          </div>
        </Card.Header>

        <Card.Img
          style={{ height: "500px" }}
          className="card-img-top"
          src={image_url}
        ></Card.Img>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <Card.Text style={{ color: "black" }}>{details}</Card.Text>
          <Link to={`/checkout/${_id}`}>
            <Button variant="primary">Get Premium Access</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex align-items-center">
            <FaRadiation className="me-2"></FaRadiation>
            {rating?.number}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
