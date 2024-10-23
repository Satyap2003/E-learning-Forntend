import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CommonModule } from '@angular/common';
import { ElipsePipe } from '../../pipe/elipse.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, ElipsePipe, HttpClientModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  constructor(private httpClient : HttpClient) {}

  courses : Course[] = [];

  ngOnInit(): void {
      this.httpClient.get("http://localhost:8080/api/course").subscribe((res : any) => {
          this.courses = res;
      });
  }
  
}
