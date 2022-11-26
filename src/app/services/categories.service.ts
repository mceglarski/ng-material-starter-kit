import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {}

  public getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
