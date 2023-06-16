export const CourseList = ({ data }) => {
  return (
    <>
      <tr>
        <td className={`${data.id > 2 ? "text-danger" : "text-primary"}`}>{data.id}</td>
        <td>{data.name}</td>
        {data.course && <td>{data.course}</td>}
        
      </tr>
    </>
  );
};
