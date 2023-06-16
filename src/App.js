
import React, { useState } from "react";
import Banner from "./Components/Banner";
import Courses from "./Components/Courses";
import SelectedCourse from "./Components/SelectedCourse";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
const [selectedCourse, setSelectedCourse] = useState();

return (
  <>
  <Banner name="Balaji" training="React"/>
  {selectedCourse ? <SelectedCourse course={selectedCourse} selectCourse={setSelectedCourse}/> : <Courses selectCourse={setSelectedCourse}/>}
  
  
  </>
)
}

export default App;
