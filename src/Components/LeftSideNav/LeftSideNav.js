import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://teach-me-servers.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="Nav ">
      <div>
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
// style={{ position: "fixed", top: "10" }}
