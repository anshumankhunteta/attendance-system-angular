import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClassComponent } from './list-class/list-class.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';

const routes: Routes = [
  {path:'',component:ListClassComponent},
  {path:'list',component:ListClassComponent},
  {path:'add',component:AddClassComponent},
  {path:'edit',component:EditClassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
