import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [catagories, setCatagories, ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div>
      <h1>Our courses: {catagories.length}</h1>
      <div>
        {catagories.map((catagory) => (
          <p key={catagory.catagory_id}>
            <Link to={`/catagory/${catagory.catagory_id}`}>
              {" "}
              {catagory.catagory_name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
