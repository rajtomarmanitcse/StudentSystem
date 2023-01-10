package com.rajcodes.StudentSystem.controller;

import com.rajcodes.StudentSystem.model.Student;
import com.rajcodes.StudentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student is Added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @DeleteMapping("/remove")
    public String removeStudent(@RequestBody Student student){
         studentService.removeStudent(student);
         return "student is deleted";
    }
}
