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
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  formEdit : boolean = true;

  constructor(private assignmentsService: AssignmentsService,
              private authService: AuthService,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      nomDevoir: ['', Validators.required],
    });

    this.secondFormGroup = this.formBuilder.group({
      dateDeRendu: [new Date(), Validators.required],
      matiere: ['', Validators.required],
    });
  }

  editForm(){
    this.formEdit = !this.formEdit
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

      console.log(message);
    });
  }
}
