import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  } , {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'',
    redirectTo:'student',
    pathMatch:'full'
  },
];
