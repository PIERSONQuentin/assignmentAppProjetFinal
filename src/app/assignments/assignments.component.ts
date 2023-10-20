import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignments.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre : string = "Mon application Angular sur les assignments !"
  formVisible = false;
  assignementSelectionne!:Assignment;
  assignments!: Assignment[];

  constructor (private assignmentService:AssignmentsService) {}

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }

  onAddAssignmentBtnClick() {
    //this.formVisible = true;
  }
  /*
  onNouvelAssignment(event:Assignment) {
    //this.assignments.push(event);
    this.assignmentService.addAssignment(event).subscribe(message => console.log(message));
    this.formVisible = false;
  }
  */
}
