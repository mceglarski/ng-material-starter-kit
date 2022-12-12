import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of, combineLatest, map } from 'rxjs';
import { ProductModel } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-sorted-product-list',
  templateUrl: './sorted-product-list.component.html',
  styleUrls: ['./sorted-product-list.component.scss'],
})
export class SortedProductListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'asc'
  );
  public order$: Observable<string> = this._orderSubject.asObservable();
  public products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.order$,
  ]).pipe(
    map(([products, order]: [ProductModel[], string]) => {
      return products.sort((a, b) => {
        if (a.price > b.price) return order === 'asc' ? 1 : -1;
        if (a.price < b.price) return order === 'asc' ? -1 : 1;
        return 0;
      });
    })
  );
  public orders: Observable<string[]> = of(['asc', 'desc']);

  constructor(private _productService: ProductsService) {}

  public sort(order: string): void {
    this._orderSubject.next(order);
  }
}
