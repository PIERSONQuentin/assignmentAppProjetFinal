import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private currentPage = new BehaviorSubject<number>(1);
  private limitSource = new BehaviorSubject<number>(10);
  private totalPagesSource = new BehaviorSubject<number>(1);

  currentLimit = this.limitSource.asObservable();
  currentTotalPages = this.totalPagesSource.asObservable();
  currentPageObservable = this.currentPage.asObservable();

  constructor() {}

  changeLimit(limit: number) {
    this.limitSource.next(limit);
  }

  changeTotalPages(totalPages: number) {
    this.totalPagesSource.next(totalPages);
  }

  goToPage(page: number): void {
    this.currentPage.next(page);
  }
}
