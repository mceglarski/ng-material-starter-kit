import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer.model';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private _httpClient: HttpClient) {}

  public getBeerPagination(
    page: number,
    per_page: number
  ): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>(
      'https://api.punkapi.com/v2/beers?page=' + page + '&per_page=' + per_page
    );
  }
}
