import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';


const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
      <div style={{marginTop:"100px"}}>
        {/* <h1>No. of courses in this catagory : {allCourses.length}</h1> */}
        <div className="d-flex flex-wrap gap-5 ">
          {allCourses.map((course) => (
            <Course course={course}></Course>
          ))}
        </div>
       
      </div>
    );
};

export default Courses;