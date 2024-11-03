import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CourseManageComponent } from "./course-manage/course-manage.component";
import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-master-course',
  standalone: true,
  imports: [SharedModule, CourseManageComponent, CourseListComponent],
  templateUrl: './master-course.component.html',
  styleUrl: './master-course.component.css'
})
export class MasterCourseComponent implements OnInit {

  @ViewChild(CourseListComponent) courseList !: CourseListComponent

  ngOnInit(): void {

  }

  showCourseManage: boolean = false;

  openCourseManage() {
    this.showCourseManage = true;
  }

  cancelSignal(event : any) {
    this.showCourseManage = ((event == 'cancel') ? false : true);
  }

  createSuccessSignal(event : string) {
    this.courseList.loadAll();
  }
}
