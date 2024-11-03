import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { CourseComponent } from './course/course.component';
import { SignInComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'course',
        component: CourseComponent
      },{
        path:'signin',
        component:SignInComponent
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
export class StudentModule { }
