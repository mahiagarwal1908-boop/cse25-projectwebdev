import React from "react";

function StudentCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h3>Name: {props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Year: {props.year}</p>
      <p>CGPA: {props.cgpa}</p>
    </div>
  );
}

export default StudentCard;