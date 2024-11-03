import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MasterCourseComponent } from './master-course/master-course.component';
import { MasterDepartmentComponent } from './master-department/master-department.component';
import { MasterLectureComponent } from './master-lecture/master-lecture.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from '../shared/about-us/about-us.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { ManageMasterCourseComponent } from './manage-master-course/manage-master-course.component';
import { ManageModuleVideoComponent } from './manage-module-video/manage-module-video.component';

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
      },{
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },{
        path: 'manage-master-course',
        component: ManageMasterCourseComponent
      } ,{
        path: 'manage-master-video',
        component: ManageModuleVideoComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
