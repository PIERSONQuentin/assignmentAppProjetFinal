import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-assignment',
  templateUrl: './sort-assignment.component.html',
  styleUrls: ['./sort-assignment.component.css']
})
export class SortAssignmentComponent implements OnInit {
  @Output() sortCriteriaChanged = new EventEmitter<{ sortDate: string, sortRendu: string, sortSearch: string }>();
  sortSearch: string = "";
  sortDate: string = "";
  sortRendu: string = "";

  constructor() { }

  ngOnInit(): void {
    // Initialiser ou récupérer vos assignments ici
  }

  updateSortSearch(value: string) {
    this.sortSearch = value;
    this.emitSortCriteria();
  }

  // Mettre à jour le tri par date
  updateSortDate(value: string) {
    this.sortDate = value;
    console.log(this.sortDate);
    this.emitSortCriteria();
  }

  // Mettre à jour le tri par rendu
  updateSortRendu(value: string) {
    this.sortRendu = value;
    this.emitSortCriteria();
  }

  // Réinitialiser les filtres
  resetFilter() {
    this.sortDate = "";
    this.sortRendu = "";
    this.sortSearch = "";
    this.emitSortCriteria();
  }

  // Envoyer les critères de tri au composant parent
  private emitSortCriteria() {
    this.sortCriteriaChanged.emit({
      sortDate: this.sortDate,
      sortRendu: this.sortRendu, 
      sortSearch: this.sortSearch
    });
  }
}
