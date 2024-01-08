import { Component, /*EventEmitter, Output*/ OnInit } from '@angular/core';
import { Assignment } from '../assignments.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  /*@Output() nouvelAssignment = new EventEmitter<Assignment>(); */

  nomDevoir:string = " ";
  dateDeRendu:Date = new Date();

  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
  };

  onSubmit() {
    
    const newAssignement = new Assignment();
    //newAssignement.id = this.assignmentsService.assignments.length + 1;
    newAssignement.id = Math.floor(Math.random() * 1000000);
    newAssignement.nom = this.nomDevoir;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false; 

    //this.nouvelAssignment.emit(newAssignement);
    this.assignmentsService.addAssignment(newAssignement).subscribe(message => console.log(message));
  }; 

}
