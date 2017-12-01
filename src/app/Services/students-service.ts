import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { StudentComponent} from '../student/student.component';
import { LoggerService } from './logger-service';

@Injectable()
// injecting the student service
export class StudentService {
  // decalring the studentlist array of students
  studentList: Student[]= [];
// injecting the loggerService using the constructor dependency injection
  constructor( private logService: LoggerService) {}
// getStudents method to return the StudentList
  getStudents(): Student[] {
    // this.logService.retrive();
      return this.studentList;
  }
// createStudent method to add a new student to the studentList array
  createStudent(newStudent: Student) {
    this.studentList.unshift(newStudent);
    this.logService.log('Adding Data');
    if (this.studentList.length > 0) {
      this.logService.retrive();
    }
  }
}
