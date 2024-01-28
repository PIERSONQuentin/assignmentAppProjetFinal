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
  matieres: string[] = ["Gestion de projet", "Management SI", "Fonctionnement d'un SGBD"];

  constructor(private assignmentsService: AssignmentsService,
              private authService: AuthService,
              private notificationService: NotificationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  assignmentForm = this.formBuilder.group({
    firstFormGroup: this.formBuilder.group({
      nomDevoir: ['', Validators.required],
    }),

    secondFormGroup: this.formBuilder.group({
      dateDeRendu: [new Date(), Validators.required],
    }),

    thirdFormGroup: this.formBuilder.group({
      matiere: ['', Validators.required],
    }),
  })



  onSubmit() {
  if (this.assignmentForm.valid) {
    // Créez un nouvel assignment avec les données du formulaire
    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 1000000);
    newAssignment.nom = this.assignmentForm.get('firstFormGroup.nomDevoir').value;
    newAssignment.auteur = this.authService.getCurrentUser().username;
    newAssignment.dateDeRendu = this.assignmentForm.get('secondFormGroup.dateDeRendu').value;
    newAssignment.rendu = false;
    newAssignment.matiere = this.assignmentForm.get('thirdFormGroup.matiere').value;

    this.assignmentsService.addAssignment(newAssignment).subscribe((message) => {
      // Notification pour afficher un message
      this.notificationService.show('Assignment ajouté avec succès.');

      console.log(newAssignment);
    });

    // Réinitialisez le formulaire après l'ajout
    this.assignmentForm.reset();

  }
}


  // permet d'accéder aux sous formulaires
  get FirstForm(){
    return this.assignmentForm.get('firstFormGroup') as FormGroup;
  }

  get SecondForm(){
    return this.assignmentForm.get('secondFormGroup') as FormGroup;
  }

  get ThirdForm(){
    return this.assignmentForm.get('thirdFormGroup') as FormGroup;
  }


  
}
