import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule }   from '@angular/material/button';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
//import { RenduDirective } from './shared/rendu.directive' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentTestComponent } from './assignments/assignment-test/assignment-test.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './assignments/paginator/paginator.component';
import '@angular/localize/init';
import { SortAssignmentComponent } from './assignments/sort-assignment/sort-assignment.component';

import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { HomeComponent } from './assignments/home/home.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    AuthComponent,
    AssignmentTestComponent,
    PaginatorComponent,
    SortAssignmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatFormFieldModule,  
    MatIconModule, 
    MatDividerModule, 
    MatInputModule,  
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule, 
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule, 
    MatSlideToggleModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
