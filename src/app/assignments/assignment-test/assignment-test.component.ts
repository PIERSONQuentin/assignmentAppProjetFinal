import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-assignment-test',
  templateUrl: './assignment-test.component.html',
  styleUrls: ['./assignment-test.component.css']
})
export class AssignmentTestComponent implements OnInit {

  constructor(private assignmentService:AssignmentsService,
              private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAdmin() {
    if(!this.authService.isLogged()) return false;
    let role = this.authService.getCurrentUserRole();

    if(role == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  peuplerBD() {
    this.assignmentService.peuplerBD();
  }

}
