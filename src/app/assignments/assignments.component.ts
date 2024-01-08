import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignments.model';
import { PaginationService } from '../shared/pagination.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  //pour gérer la pagination
  page:number = 1;
  limit:number = 10;
  totalDocs!:number;
  totalPages!:number;
  nextPage!:number;
  prevPage!:number;
  hasPrevPage!:boolean;
  hasNextPage!:boolean;

  titre : string = "Mon application Angular sur les assignments !"
  formVisible = false;
  assignementSelectionne!:Assignment;
  assignments!: Assignment[];

  constructor (
    private assignmentService: AssignmentsService,
    private paginationService: PaginationService
  ) {}
  
  ngOnInit(): void {
    this.paginationService.currentPageObservable.subscribe(page => {
      this.page = page;
      this.loadPageData(); // Charger les données en fonction de la page actuelle
    });
  
    this.paginationService.currentLimit.subscribe(limit => {
      this.limit = limit;
      this.loadPageData(); // Charger les données en fonction de la limite actuelle
    });
  }
  
  loadPageData(): void {
    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
      .subscribe(data => {
        this.assignments = data.docs;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
  
        // Mettre à jour les valeurs de pagination dans le service
        this.paginationService.changeTotalPages(this.totalPages);
        this.paginationService.changeLimit(this.limit);
      });
  }  
  
  getAssignments() {
    this.assignmentService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
}
