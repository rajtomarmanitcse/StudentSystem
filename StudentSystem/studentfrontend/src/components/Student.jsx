import { Paper } from "@mui/material";
import { Container, margin } from "@mui/system";
import React, { useEffect, useState } from "react";

function Student() {

  const [student, setStudent] = useState({
    name: "",
    address: ""
  });
  const [students , setStudents] = useState([]);

 function handleChange(event){
  const {name , value} = event.target;

  setStudent(prevValue => {
    return {
      ...prevValue,
      [name]: value
    }
  });
 }

 useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  },[])
 })

 function handleSubmit(event) {
    event.preventDefault();
    console.log(student);
    fetch("http://localhost:8080/student/add",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(student)
    }).then(()=> {
      console.log("New Student Added")
    })
 }

  return (<Container style={{width: "200%"}}>
    <Paper elevation={3} style={{ margin: "auto", width: "50%" }}>
    <h1>Add Student</h1>
    <form onSubmit={handleSubmit}>
      
      <input type="text" onChange={handleChange} placeholder="Student Name" name="name" value={student.name} size="50" />
      <br />
      <input type="text" onChange={handleChange} placeholder="Student Address" name="address" value={student.address} size="50" />
      <br />
      <input id="submit" type="submit" value="Submit" onClick={handleSubmit} />
    </form>
    </Paper>

    <Paper elevation={3} style={{ margin: "auto", width: "30%" }}>
    {students.map(student =>(
      <Paper elevation={6} style={{margin:"20px" , padding:"5px", textAlign:"left" }} key={student.id}>
        <p>Id: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Address: {student.address}</p>
      </Paper>
    ))}
    </Paper>
    </Container>
  );
}

export default Student;
