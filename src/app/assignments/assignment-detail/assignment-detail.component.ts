import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignments.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  /*@Input()*/ assignementTransmis!: Assignment;

  constructor(private assignmentService:AssignmentsService, 
              private route:ActivatedRoute, 
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id)
    .subscribe(assignment => this.assignementTransmis = assignment);
  }
  
  onAssignmentRendu() {
    this.assignementTransmis.rendu = true;
    this.assignmentService.updateAssignment(this.assignementTransmis).subscribe(message => console.log(message));
    this.router.navigate(['/home']);
  }

  onAssignmentDelete() {
    if(!this.assignementTransmis) return;
    this.assignmentService.deleteAssignment(this.assignementTransmis).subscribe(message => console.log(message));
    this.assignementTransmis = null; 
    this.router.navigate(['/home']);
  }

  onClickEdit() {
    this.router.navigate(['/assignment', this.assignementTransmis.id, 'edit'], 
    {queryParams: {nom:this.assignementTransmis.nom}, fragment:'edition'});
  }
  isAdmin(): boolean {
    if (this.authService.getCurrentUserRole() === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  
}
