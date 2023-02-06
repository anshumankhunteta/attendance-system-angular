import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  updateStudent(form:NgForm){
    console.log(form.valid);
  }
  constructor(private _location: Location){}

  backClick(){
    this._location.back();
  }
}
