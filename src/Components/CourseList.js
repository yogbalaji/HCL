export const CourseList = ({data}) =>{
    return(
        <>
        <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.course}</td>
                </tr>
        </>

    )
}


