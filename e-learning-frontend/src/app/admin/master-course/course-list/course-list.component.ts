import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ApiService } from '../../../shared/api.service';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  course : Course[] = [];

  constructor(private apiService : ApiService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.apiService.get('course').subscribe((res : any) => {
      this.course = res;
    });
  }
}
