import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './LeftSideNav.css'

const LeftSideNav = () => {
  const [catagories, setCatagories, ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="Nav d-none d-lg-block">
      <div style={{ position: "fixed", top: "10" }}>
        <h3 >Our courses</h3>
        {catagories.map((catagory) => (
          <p className="mt-3" key={catagory.catagory_id}>
            <ListGroup>
              <Button variant="light">
                <Link
                  style={{textDecoration: "none", color:"black"}}
                  to={`/catagory/${catagory.catagory_id}`}
                >
                  {" "}
                  {catagory.catagory_name}
                </Link>
              </Button>
            </ListGroup>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
