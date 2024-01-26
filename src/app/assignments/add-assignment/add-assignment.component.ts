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


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

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
    });

    this.thirdFormGroup = this.formBuilder.group({
      matiere: ['', Validators.required],
    });
  }

  editForm(){
    this.formEdit = !this.formEdit
  }

  onSubmit() {


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

      console.log(message);
    });
  }
}
