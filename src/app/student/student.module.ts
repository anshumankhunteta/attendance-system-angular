import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
  ]
})
export class StudentModule { 
  constructor(private _location: Location){}

  backClick(){
    this._location.back();
  }
}
