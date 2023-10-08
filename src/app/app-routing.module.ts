import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentsComponent } from './assignments/assignments.component'; 
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';


const routes: Routes = [
  { path: 'assignment-list', component: AssignmentsComponent },
  { path: 'add-assignment', component: AddAssignmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/*
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})*/
export class AppRoutingModule { }
