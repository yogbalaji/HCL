import { useState } from "react";
import { CourseList } from "./CourseList";

const cData = [
    {
        id: 1,
        name: "Ram",
        course: "Angular"
    },
    {
        id: 2,
        name: "Sita",
        course: "React"
    },
    {
        id: 3,
        name: "Lakshman",
        course: "JS"
    },
    {
      id: 4,
      name: "Jenifer",
      course: "CSS" 
  }
]

const Courses = () => {
const [course, setCourse] =  useState(cData);


const addCourse = () =>{
setCourse([
  ...course,
    {
      id: 5,
      name: "Robert",
      course: "HTML"  
  }
])
};

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
            {course.map((item,index)=>(
                <CourseList key={item.id} data={item}/>
            ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-secondary" onClick={addCourse}>Secondary</button>
    </>
  );
};

export default Courses;
