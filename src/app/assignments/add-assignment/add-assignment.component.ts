import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignments.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>(); 

  nomDevoir:string = " ";
  dateDeRendu:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  };

  onSubmit() {
    const newAssignement = new Assignment();
    newAssignement.nom = this.nomDevoir;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false; 

    this.nouvelAssignment.emit(newAssignement);
  }; 

}
