import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignments.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      id: 1,
      nom: "Vive les maths",
      dateDeRendu: new Date('2021-03-01'),
      rendu: true
    },
    {
      id: 2,
      nom: "Vive la physique",
      dateDeRendu: new Date('2023-03-05'),
      rendu: false
    },
    {
      id: 3,
      nom: "Angular c'est encore mieux",
      dateDeRendu: new Date('2021-03-10'),
      rendu: false
  }];
  
  constructor(private loggingService:LoggingService) { }
  
  getAssignments():Observable<Assignment[]> {
    return of (this.assignments);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    const assignment:Assignment|undefined = this.assignments.find(assignment => assignment.id === id);
    return of (assignment);
  } 

  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, 'a été ajouté');
    return of ('assignment ajouté');
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    const index = this.assignments.indexOf(assignment);
    this.assignments[index] = assignment;
    this.loggingService.log(assignment.nom, 'a été modifié');
    return of ('Assignment service : assignment modifié !');
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    const index = this.assignments.indexOf(assignment);
    this.assignments.splice(index, 1);
    this.loggingService.log(assignment.nom, 'a été supprimé');
    return of ('Assignment service : assignment supprimé !');
  }
}
