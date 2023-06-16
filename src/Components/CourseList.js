export const CourseList = ({ data, selectCourse }) => {
  return (
    <>
      <tr onClick={()=>selectCourse(data)}>
        <td className={`${data.id > 2 ? "text-danger" : "text-primary"}`}>{data.id}</td>
        <td>{data.first_name}</td>
        <td>{data.email}</td>
        
      </tr>
    </>
  );
};
