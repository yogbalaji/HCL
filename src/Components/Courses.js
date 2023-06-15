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
    }
]

const Courses = () => {
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
            {cData.map((item,index)=>(
                <CourseList key={item.id} data={item}/>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Courses;
