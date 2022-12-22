import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.scss'],
})
export class ProductGridListComponent {
  private _selectedProductIdSubject: Subject<number> = new Subject<number>();

  public selectedProductId$: Observable<number> =
    this._selectedProductIdSubject.asObservable();
  public readonly productList$: Observable<ProductModel[]> =
    this._productService.getAll();
  public readonly productDetails$: Observable<ProductModel> =
    this.selectedProductId$.pipe(
      switchMap((data) => this._productService.getOne(data))
    );

  constructor(private _productService: ProductsService) {}

  public selectProduct(id: number): void {
    this._selectedProductIdSubject.next(id);
  }
}
