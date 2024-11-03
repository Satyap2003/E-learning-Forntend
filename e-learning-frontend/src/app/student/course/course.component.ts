import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CommonModule } from '@angular/common';
import { ElipsePipe } from '../../pipe/elipse.pipe';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  courses: Course[] = [];

  ngOnInit(): void {
    this.apiService.get('course').subscribe((res: any) => {
      this.courses = res;
      this.courses.forEach((cs) => {
        cs.rating = Math.round(cs.rating);
      });
    });
  }
}
