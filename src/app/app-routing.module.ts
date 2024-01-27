import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

import { AssignmentsComponent } from './assignments/assignments.component'; 
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthComponent } from './auth/auth.component'; 
import { AssignmentTestComponent } from './assignments/assignment-test/assignment-test.component';
import { HomeComponent } from './assignments/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'home', component: HomeComponent},
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'add-assignment', component: AddAssignmentComponent }, 
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [AuthGuard]}, 
  { path: 'auth', component: AuthComponent}, 
  { path: 'test', component: AssignmentTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
