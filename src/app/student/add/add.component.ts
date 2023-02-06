import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  // students: { Name: string, Branch: string, roll: number } = {
  //   Name: "Toyota",
  //   Branch: "Corolla",
  //   roll: 2009
  // };  
  saveStudent(form : NgForm){
    console.log(form.valid);
  }
  constructor(private _location: Location){}

  backClick(){
    this._location.back();
  }
}
