import { Component } from '@angular/core';
import { DataAccess } from '@org/dataAccess';

@Component({
  selector: 'app-student',
  imports: [DataAccess],
  templateUrl: './student.html',
  styleUrls: ['./student.scss'],
})
export class Student {}
