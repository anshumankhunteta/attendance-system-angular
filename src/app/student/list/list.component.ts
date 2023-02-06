import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  students = [
    {
      "name": "Sanjay",
      "roll": 58,
      "branch": "CS",
      "sem": "6th"
    },
    {
      "name": "Suraj",
      "roll": 33,
      "branch": "CS",
      "sem": "6th"
    },
    {
      "name": "Shyam",
      "roll": 28,
      "branch": "CS",
      "sem": "6th"
    },
    {
      "name": "Karan",
      "roll": 19,
      "branch": "CS",
      "sem": "6th"
    },
    {
      "name": "Utkarsh",
      "roll": 5,
      "branch": "CS",
      "sem": "6th"
    }
  ]
  constructor(private _location: Location){}

  backClick(){
    this._location.back();
  }
}
