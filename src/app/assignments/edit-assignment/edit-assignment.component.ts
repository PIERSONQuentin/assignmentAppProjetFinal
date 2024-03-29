import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignments.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;
  nomAssignment!: string;
  auteurAssignment!: string;
  matiereAssignment!: string;
  noteAssignment!: number;
  remarquesAssignment!: string;
  dateDeRendu!: Date;

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getAssignment();

    console.log("Query Params : ");
    console.log(this.route.snapshot.queryParams);
    console.log("Fragment : ");
    console.log(this.route.snapshot.fragment);
  }

  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = +this.route.snapshot.params['id'];
   
    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;
      // Pour pré-remplir le formulaire
      this.nomAssignment = assignment.nom;
      this.auteurAssignment = assignment.auteur;
      this.matiereAssignment = assignment.matiere;
      this.noteAssignment = assignment.note;
      this.remarquesAssignment = assignment.remarques;
      this.dateDeRendu = assignment.dateDeRendu;

    });
  }
  onSaveAssignment() {
    if (!this.assignment) return;
 
    // on récupère les valeurs dans le formulaire
    this.assignment.nom = this.nomAssignment;
    this.assignment.auteur = this.auteurAssignment;
    this.assignment.matiere = this.matiereAssignment;
    this.assignment.note = this.noteAssignment;
    this.assignment.remarques = this.remarquesAssignment;
    this.assignment.dateDeRendu = this.dateDeRendu;
    
    this.assignmentsService.updateAssignment(this.assignment)
      .subscribe((message) => {

         // notification pour afficher un message
        this.notificationService.show('Assignment mis à jour avec succès.');
        console.log(message);
 
        // navigation vers la home page
        this.router.navigate(['/home']);
      });
  } 
}
