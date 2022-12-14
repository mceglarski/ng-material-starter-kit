import { Component } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { PageEvent } from '@angular/material/paginator';

export interface PaginatorModel {
  page: number;
  per_page: number;
}

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent {
  private _paginatorSubject: BehaviorSubject<PaginatorModel> =
    new BehaviorSubject<PaginatorModel>({
      page: 1,
      per_page: 5,
    });
  public pagination$: Observable<PaginatorModel> =
    this._paginatorSubject.asObservable();

  public beerList$: Observable<BeerModel[]> = this.pagination$.pipe(
    switchMap((pagination: PaginatorModel) => {
      return this._beerService.getBeerPagination(
        pagination.page,
        pagination.per_page
      );
    })
  );

  constructor(private _beerService: BeerService) {}

  public changePagination(event: PageEvent): void {
    this._paginatorSubject.next({
      page: event.pageIndex === 0 ? 1 : event.pageIndex,
      per_page: event.pageSize,
    });
  }
}
