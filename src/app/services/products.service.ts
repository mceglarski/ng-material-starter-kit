import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  private productsUrl: string = 'https://fakestoreapi.com/products/';

  public getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(this.productsUrl + id);
  }

  public getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(this.productsUrl);
  }

  public create(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>(this.productsUrl, product);
  }

  public delete(id: number): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>(this.productsUrl + id);
  }
}
