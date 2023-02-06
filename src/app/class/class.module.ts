import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { AddClassComponent } from './add-class/add-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { ListClassComponent } from './list-class/list-class.component';


@NgModule({
  declarations: [
    AddClassComponent,
    EditClassComponent,
    ListClassComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule
  ]
})
export class ClassModule { }
