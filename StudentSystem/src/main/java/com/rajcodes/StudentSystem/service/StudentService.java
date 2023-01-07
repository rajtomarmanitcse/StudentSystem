package com.rajcodes.StudentSystem.service;

import com.rajcodes.StudentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
