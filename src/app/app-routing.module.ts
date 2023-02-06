import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path:'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path:'class', loadChildren: () => import('./class/class.module').then(m => m.ClassModule) },
  { path:'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
