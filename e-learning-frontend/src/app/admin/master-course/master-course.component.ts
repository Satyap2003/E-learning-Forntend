import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { HttpClient } from '@angular/common/http';
import { Lecture } from '../../model/lecture';
import { ShareModule } from '../../share.module';

@Component({
  selector: 'app-master-course',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './master-course.component.html',
  styleUrl: './master-course.component.css'
})
export class MasterCourseComponent implements OnInit {
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
    lectureId: '',
    ratingCount: 0
  };

  lectures : Lecture[] = [];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
      this.lectures = [];
      this.getLeacrtures();
  }

  onSubmit(): void {
    debugger
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
  getLeacrtures() {
    this.http.get('http://localhost:8080/api/lecture').subscribe((res: any) => {
      this.lectures = res;
    });
  }
}
