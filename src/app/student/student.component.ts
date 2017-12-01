import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../Services/students-service';
import { TitleService } from '../Services/title-service';
import { Input } from '@angular/core/src/metadata/directives';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  mystudent: Student = new Student();
  studentList: Student[] = [];
  titleList: string[] = [];
  hideTable: boolean = false;

  constructor(private studentService: StudentService, private titleService: TitleService) {}

  ngOnInit() {
    this.titleList = this.titleService.getTitle();
    this.studentList = this.studentService.getStudents();
}
onSave(studentTitle, studentName, studentAge) {
  this.mystudent.title = studentTitle;
  this.mystudent.name = studentName;
  this.mystudent.age = studentAge;
  this.studentService.createStudent(this.mystudent);
  if (this.studentList.length > 0) {
    this.hideTable = true;
  }
  this.mystudent = new Student;
}
}
