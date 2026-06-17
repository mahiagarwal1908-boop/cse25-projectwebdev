import React from "react"; 
import "./Student.css"; 
function Student(props) { 
return ( 
<div className="student-box"> 
<h2>Student Details</h2> 
<p>Name: {props.name}</p> 
<p>Course: {props.course}</p> 
<p>Marks: {props.marks}</p> 
</div> 
); 
} 
export default Student;