import React from "react";
import { Paper } from "@mui/material";
import { useState,useEffect } from "react";

function ShowStudent() {

    const [students , setStudents] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        },[])
       })

    function handleClick(index){
        setStudents(prevValue=>{
          console.log(index);
         return prevValue.filter(s=> s.id !== index.id)
        });
      
        fetch("http://localhost:8080/student/remove",{
          method: 'DELETE',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(index)
        }).then(()=>{
          console.log(index);
        })
       }


  return (
    <Paper elevation={3} style={{ margin: "auto", width: "30%" }}>
      {students.map((student) => (
        <Paper
          elevation={6}
          style={{ margin: "20px", padding: "5px", textAlign: "left" }}
          key={student.id}
        >
          <p>Id: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Address: {student.address}</p>
          <button
            onClick={() => {
              handleClick(student);
            }}
          >
            Delete
          </button>
        </Paper>
      ))}
    </Paper>
  );
}

export default ShowStudent;
