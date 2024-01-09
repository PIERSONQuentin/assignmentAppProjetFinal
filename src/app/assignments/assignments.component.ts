import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignments.model';
import { PaginationService } from '../shared/pagination.service';
import { SortAssignmentComponent } from './sort-assignment/sort-assignment.component';

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

  sortDate: string = "";
  sortRendu: string = "";
  sortSearch: string = "";

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

        this.sortAssignments();
      });
  }  
  
  getAssignments() {
    this.assignmentService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }

  onSortCriteriaChanged(criteria: { sortDate: string, sortRendu: string, sortSearch: string}) {
    this.sortDate = criteria.sortDate;
    this.sortRendu = criteria.sortRendu;
    this.sortSearch = criteria.sortSearch;
    this.loadPageData();
  }

  sortAssignments() {
    if (this.sortDate) {
      this.assignments = this.sortAssignmentsByDate(this.assignments, this.sortDate);
    }
    if (this.sortRendu) {
      this.assignments = this.sortAssignmentsByRendu(this.assignments, this.sortRendu === 'true');
    }
    if (this.sortSearch) {
      this.assignments = this.sortAssignmentsBySearch(this.assignments, this.sortSearch);
    }
  }

  private sortAssignmentsByDate(assignments: Assignment[], sortDate: string): Assignment[] {
    return assignments.sort((a, b) => {
      const dateA = new Date(a.dateDeRendu);
      const dateB = new Date(b.dateDeRendu);

      if (sortDate === 'asc') {
        return dateB.getTime() - dateA.getTime(); 
      } else if (sortDate === 'desc') {
        return dateA.getTime() - dateB.getTime();
      }

      return 0;
    });
  }

  private sortAssignmentsByRendu(assignments: Assignment[], sortRendu: boolean): Assignment[] {
    return assignments.sort((a, b) => {
      if (sortRendu) {
        return (a.rendu === sortRendu) ? -1 : 1;
      } else {
        return (b.rendu === sortRendu) ? -1 : 1;
      }
    });
  }

  private sortAssignmentsBySearch(assignments: Assignment[], searchTerm: string): Assignment[] {
    if (!searchTerm) {
      return assignments; // Retourne tous les assignments si aucun terme de recherche n'est fourni
    }

    searchTerm = searchTerm.toLowerCase(); // Convertir le terme de recherche en minuscules pour la comparaison

    return assignments.filter(assignment => {
      return (assignment.nom && assignment.nom.toLowerCase().includes(searchTerm));
    });
  }

}
