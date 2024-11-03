import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Course } from '../../model/course';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent implements OnInit{
  courses : Course[] = [];
  constructor(private apiService : ApiService){}
  ngOnInit(): void {
    this.apiService.get("course/my").subscribe((res : any) => {
      console.log();
      this.courses = res;
    });
  }
}
