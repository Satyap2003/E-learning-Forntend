import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { CourseComponent } from './course/course.component';
import { SignInComponent } from './signin/signin.component';
import { SharedModule } from 'primeng/api';
import { AboutUsComponent } from '../shared/about-us/about-us.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { VideoDetaiklComponent } from './video-detaikl/video-detaikl.component';
import { ExploreCourseComponent } from './explore-course/explore-course.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'course',
        component: CourseComponent,
      }, {
        path: 'home',
        component: StudentHomeComponent,
      },
      {
        path: 'signin',
        component: SignInComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },{
        path:'my-course',
        component: MyCoursesComponent
      }, {
        path: 'course/:courseId',
        component: VideoDetaiklComponent
      },
      {
        path: 'explore/:courseId',
        component: ExploreCourseComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class StudentModule {}
