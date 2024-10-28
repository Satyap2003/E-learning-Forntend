import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-master-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './master-course.component.html',
  styleUrl: './master-course.component.css'
})
export class MasterCourseComponent {
  URL = 'http://localhost:8080/api/course';
  course : Course = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    rating: 0,
    img: '',
    duration: '',
    noOfStudents: 0,
    lecture: '',
    ratingCount: 0
  };

  constructor(private http: HttpClient){

  }

  onSubmit(): void {
    this.http.post(this.URL, this.course).subscribe((res) => {
      console.log(res);
      this.getCourse();
    });
  }

  getCourse() {
    this.http.get(this.URL).subscribe((res) => {
      console.log("RESPOSE :" + res);
    });
  }
}
