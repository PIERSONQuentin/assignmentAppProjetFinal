import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';

@Component({
  selector: 'app-assignment-test',
  templateUrl: './assignment-test.component.html',
  styleUrls: ['./assignment-test.component.css']
})
export class AssignmentTestComponent implements OnInit {

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
  }

  peuplerBD() {
    this.assignmentService.peuplerBD();
  }

}
