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
  matieres: string[] = ["Management SI", "Gestion de projet", "Fonctionnement d'un SGBD"];


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
      const newAssignment = new Assignment(
        Math.floor(Math.random() * 1000000),
        this.assignmentForm.get('firstFormGroup.nomDevoir').value,
        this.authService.getCurrentUser().username,
        this.assignmentForm.get('secondFormGroup.dateDeRendu').value,
        false,
        this.assignmentForm.get('thirdFormGroup.matiere').value
      );

      // Appelez la méthode addAssignment() de votre service pour ajouter l'assignment dans la BDD
      this.assignmentsService.addAssignment(newAssignment).subscribe(() => {
        // Réinitialisez le formulaire après l'ajout
        this.assignmentForm.reset();

        // Notification pour afficher un message
        this.notificationService.show('Assignment ajouté avec succès.');

        // Ajoutez un console.log pour vérifier si l'ajout a réussi
      console.log('Devoir ajouté avec succès:', newAssignment);
      });
    
    }
  }

  // permet d'accéder aux sous formulaires
  get FirstForm() {
    return this.assignmentForm.get('firstFormGroup') as FormGroup;
  }

  get SecondForm() {
    return this.assignmentForm.get('secondFormGroup') as FormGroup;
  }

  get ThirdForm() {
    return this.assignmentForm.get('thirdFormGroup') as FormGroup;
  }
}
