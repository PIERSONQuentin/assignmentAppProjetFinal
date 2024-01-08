import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-assignment',
  templateUrl: './sort-assignment.component.html',
  styleUrls: ['./sort-assignment.component.css']
})
export class SortAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search : String ="";
  sortDate : String ="";
  sortRendu : String =""; 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  sortDateAsc(){
    this.sortDate = "asc";
  }

  sortDateDesc(){
    this.sortDate = "desc";
  }

  sortRenduAsc(){
    this.sortRendu = "asc";
  }

  sortRenduDesc(){
    this.sortRendu = "desc";
  }

  resetFilter(){
    this.search = "";
    this.sortDate = "";
    this.sortRendu = "";
  }

}
