import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { StudentComponent} from '../student/student.component';

@Injectable()
// injeting the title service
export class TitleService {
  // declaring the titlelist
  TitleList: string[]= [];
  // initializing the titlelist in constructor
  constructor() {
    this.TitleList.unshift('Mr.');
    this.TitleList.unshift('Mrs.');
  }
  // getTitle() method to return the titlelist
  getTitle(): string[] {
    return this.TitleList;
  }
}
