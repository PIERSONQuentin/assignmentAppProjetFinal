import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignments.model';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { bdInitialAssignments } from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 
  
  constructor(private loggingService:LoggingService, 
              private http:HttpClient) { }

  //url = 'http://localhost:8010/api/assignments';
  url = 'https://assignmentappprojetfinalbackend.onrender.com/api/assignments'; 
  
  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url); 
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    const url = `${this.url}/${id}`;
    return this.http.get<Assignment>(url)
    .pipe(
      map(assignment => {
        assignment.nom = assignment.nom.toUpperCase();
        return assignment;
      }), 
      tap(assignment => {
        this.loggingService.log(assignment.nom, 'a été récupéré');
      }), 
      catchError(this.handleError<any>(`### catchError: getAssignment id=${id}`))
    )
  } 

  getAssignmentsPagine(page:number, limit:number):Observable<any> {
    return this.http.get<any>(this.url + `?page=${page}&limit=${limit}`)
  }

  private handleError<T>(operation = 'operation', result?:T) {
    return (error:any):Observable<T> => {
      console.error(error);
      console.log(`${operation} a échoué: ${error.message}`);
      return of(result as T);
    }
  }

  addAssignment(assignment:Assignment):Observable<any> {
    return this.http.post(this.url, assignment, this.HttpOptions);  
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    return this.http.put(this.url, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
    const url = `${this.url}/${assignment._id}`;
    return this.http.delete(url);
  }

  peuplerBD() {
    bdInitialAssignments.forEach(a => {
      const newAssignment = new Assignment();
      newAssignment.id = a.id;
      newAssignment.nom = a.nom;
      newAssignment.auteur = a.auteur;
      newAssignment.imageAuteur = a.imageAuteur;
      newAssignment.matiere = a.matiere;
      newAssignment.imageMatiere = a.imageMatiere;
      newAssignment.note = a.note;
      newAssignment.remarques = a.remarques;
      newAssignment.dateDeRendu = new Date(a.dateDeRendu);
      newAssignment.rendu = a.rendu;
      this.addAssignment(newAssignment).subscribe(message => console.log(message));
    })
  }
  
}
