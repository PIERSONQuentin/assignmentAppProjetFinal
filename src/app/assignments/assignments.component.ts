import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignments.model';
import { PaginationService } from '../shared/pagination.service';
import { SortAssignmentComponent } from './sort-assignment/sort-assignment.component';
import { AuthService } from '../shared/auth.service';

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
    private paginationService: PaginationService, 
    private authService: AuthService
  ) {}

  isLogged() {
    return this.authService.isLogged();
  }

  isAdmin() {
    if(!this.isLogged()) return false;

    let role = this.authService.getCurrentUserRole();

    if(role == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  calculateHeight() {
    if(this.isAdmin()) {
      return (100 / 3) + "%";
    } else {
      return "100%";
    }
  }
  
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
        let processedAssignments = data.docs;
  
        if (this.sortDate) {
          processedAssignments = this.sortAssignmentsByDate(processedAssignments, this.sortDate);
        }
        if (this.sortRendu) {
          processedAssignments = this.sortAssignmentsByRendu(processedAssignments, this.sortRendu === 'true');
        }
        if (this.sortSearch) {
          processedAssignments = this.sortAssignmentsBySearch(processedAssignments, this.sortSearch);
        }
  
        this.assignments = processedAssignments;
        
        // Gestion de la pagination en fonction des critères de tri
        this.totalDocs = this.sortDate || this.sortRendu || this.sortSearch ? processedAssignments.length : data.totalDocs;
        this.totalPages = Math.ceil(this.totalDocs / this.limit);
  
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
    
        // Mettre à jour les valeurs de pagination dans le service
        this.paginationService.changeTotalPages(this.totalPages);
        this.paginationService.changeLimit(this.limit);

        // Mettre à jour le nombre total de documents dans le service si aucun tri n'est appliqué
        if(!this.sortDate || !this.sortRendu) {
          this.paginationService.changeTotalDocs(this.totalDocs);
        }
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
    return assignments.filter(assignment => assignment.rendu === sortRendu);
  }
  

  private sortAssignmentsBySearch(assignments: Assignment[], searchTerm: string): Assignment[] {
    if (!searchTerm) {
      return assignments; // Retourne tous les assignments si aucun terme de recherche n'est fourni
    }

    searchTerm = searchTerm.toLowerCase(); // Convertir le terme de recherche en minuscules pour la comparaison

    return assignments.filter(assignment => {
      return (assignment.nom && assignment.nom.toLowerCase().includes(searchTerm) 
      || assignment.auteur && assignment.auteur.toLowerCase().includes(searchTerm)
      || assignment.matiere && assignment.matiere.toLowerCase().includes(searchTerm));
    });
  }

}
