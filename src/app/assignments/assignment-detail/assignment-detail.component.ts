import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignments.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignementTransmis!: Assignment;

  constructor() { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    this.assignementTransmis.rendu = true;
  }

}
