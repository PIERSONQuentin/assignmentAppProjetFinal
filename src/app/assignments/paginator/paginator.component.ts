import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { PaginationService } from 'src/app/shared/pagination.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'], 
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorComponent}],
})
export class PaginatorComponent implements OnInit {

  changes = new Subject<void>();

  //pour gérer la pagination
  page:number = 0;
  limit:number = 10;
  totalPages!:number;

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageSizeOptions = [5, 10, 25, 100];

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.paginationService.currentLimit.subscribe(limit => {
      this.limit = limit;
    });

    this.paginationService.currentTotalPages.subscribe(totalPages => {
      this.totalPages = totalPages;
    });

    this.paginationService.currentPageObservable.subscribe(page => {
      this.page = page - 1; // -1 car MatPaginator commence à l'indice 0
    });
  }

  onPageChange(event: PageEvent): void {
    const newPage = event.pageIndex + 1; // +1 car MatPaginator commence à l'indice 0
    const newLimit = event.pageSize;
  
    if (this.limit !== newLimit) {
      this.paginationService.changeLimit(newLimit);
    }
  
    this.paginationService.goToPage(newPage);
  }

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`Première page`;
  itemsPerPageLabel = $localize`Élement par page :`;
  lastPageLabel = $localize`Dernière page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Page suivante';
  previousPageLabel = 'Page précédente';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 sur 1`;
    }

    return $localize`Page ${page + 1} sur ${length}`;
  }
}
