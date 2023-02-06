import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component:ListComponent },
  { path: 'add', component:AddComponent },
  { path: 'edit', component:EditComponent }

];
const myroutes= RouterModule.forChild(routes);
@NgModule({
  imports: [myroutes],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
