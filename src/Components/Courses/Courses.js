import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const allCourses = useLoaderData();
  // console.log(allCourses);
  return (
    <div style={{ marginTop: "100px"}}>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {allCourses.map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
