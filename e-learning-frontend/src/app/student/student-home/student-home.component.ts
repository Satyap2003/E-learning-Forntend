import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { ApiService } from '../../shared/api.service';
import { ElipsePipe } from '../../pipe/elipse.pipe';
import { SharedModule } from '../../shared/shared.module';
import { Lecture } from '../../model/lecture';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [ElipsePipe, SharedModule],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent implements OnInit {
  courses  : Course[]= [];
  lectures  : Lecture[] = [];
  constructor(private apiService : ApiService){}
  ngOnInit(): void {
    this.apiService.get('course/top-course').subscribe((res: any) => {
      this.courses = res;
      this.courses.forEach((cs) => {
        cs.rating = Math.round(cs.rating);
      });
    });

    this.apiService.get('lecture').subscribe((res: any) => {
      this.lectures = res;
    });
  }
}
