import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="Nav d-none d-lg-block">
      <div style={{ position: "fixed", top: "10" }}>
        <h3>Our courses</h3>
        {catagories.map((catagory) => (
          <Link to={`/catagory/${catagory.catagory_id}`} className="linkStyle">
            <p className="allCourses">{catagory.catagory_name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
