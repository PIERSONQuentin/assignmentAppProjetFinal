import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignments.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  nomDevoir: string = "";
  dateDeRendu: Date = new Date();
  matiere: string = "";

  assignmentForm: FormGroup;
  isLinear = true;
  completedSteps: boolean[] = [false, false, false]; // Tableau pour suivre les étapes complétées

  constructor(private assignmentsService: AssignmentsService,
              private authService: AuthService,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.assignmentForm = this.formBuilder.group({
      nomDevoir: ['', Validators.required],
      dateDeRendu: [new Date(), Validators.required],
      matiere: ['', Validators.required],
    });

    // Écoutez les changements dans le formulaire pour mettre à jour la complétion des étapes
    this.assignmentForm.valueChanges.subscribe(() => {
      this.updateStepCompletion();
    });
  }

  // Fonction pour mettre à jour la complétion des étapes en fonction du contenu des champs
  private updateStepCompletion() {
    this.completedSteps[0] = this.nomDevoir.trim() !== ""; // L'étape 1 est complétée si le champ nomDevoir n'est pas vide
    this.completedSteps[1] = this.dateDeRendu !== null; // L'étape 2 est complétée si la dateDeRendu est définie
    this.completedSteps[2] = this.matiere.trim() !== ""; // L'étape 3 est complétée si le champ matiere n'est pas vide
  }

  onSubmit() {
    if (this.assignmentForm.invalid) {
      // Affichez un message d'erreur
      this.notificationService.show("Veuillez remplir tous les champs obligatoires ou corriger les erreurs.");
      return;
    }

    const newAssignement = new Assignment();
    newAssignement.id = Math.floor(Math.random() * 1000000);
    newAssignement.nom = this.nomDevoir;
    newAssignement.auteur = this.authService.getCurrentUser().username;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;
    newAssignement.matiere = this.matiere;

    this.assignmentsService.addAssignment(newAssignement).subscribe((message) => {
      // Notification pour afficher un message
      this.notificationService.show('Assignment ajouté avec succès.');
  
      // Réinitialisez le formulaire
      this.assignmentForm.reset();

      // Réinitialisez les étapes complétées
      this.completedSteps = [false, false, false];

      console.log(message);
    });
  }
}
