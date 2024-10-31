import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MasterCourseComponent } from './master-course/master-course.component';
import { MasterDepartmentComponent } from './master-department/master-department.component';
import { MasterLectureComponent } from './master-lecture/master-lecture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'master-course',
        component: MasterCourseComponent
      } ,{
        path: 'master-department',
        component: MasterDepartmentComponent
      },
      {
        path: 'master-lecture', 
        component: MasterLectureComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
