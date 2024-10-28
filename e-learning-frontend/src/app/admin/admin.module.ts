import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MasterCourseComponent } from './master-course/master-course.component';
import { MasterDepartmentComponent } from './master-department/master-department.component';

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
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
