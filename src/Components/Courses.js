import { useEffect, useState } from "react";
import { CourseList } from "./CourseList";


const Courses = ({selectCourse}) => {
const [course, setCourse] =  useState([]);


useEffect(()=>{

  const fetchCourse = async ()=>{
    const response = await fetch("https://reqres.in/api/users");
    const res = await response.json();
    //console.log("rogue function");
    setCourse(res.data);

  } 


fetchCourse();
},[])



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
                <CourseList key={item.id} data={item} selectCourse={selectCourse}/>
            ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-secondary" onClick={addCourse}>Add Course</button>
    </>
  );
};

export default Courses;
