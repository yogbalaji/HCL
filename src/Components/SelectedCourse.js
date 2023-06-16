const SelectedCourse = ({course, selectCourse}) =>{


return(
    <>
        
    
    <h1>Name : {course.first_name}</h1>
    <h1>ID : {course.id}</h1>
    <h1>Course : {course.email}</h1>
    <button type="button" className="btn btn-secondary" onClick={()=>selectCourse()}>Home</button>
    </>



)
}

export default SelectedCourse;