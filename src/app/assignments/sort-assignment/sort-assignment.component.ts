import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';

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

  constructor(private notificationService: NotificationService) { }

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

    // notification pour afficher un message
    this.notificationService.show('Les filtres ont bien été réinitialiser.');
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
