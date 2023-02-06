import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';


@NgModule({
  declarations: [
    ListTeacherComponent,
    AddTeacherComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
    ,FormsModule
  ]
})
export class TeacherModule { }
