import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent {
  public list$: ProductModel[] = [];
  public displayedColumns: string[] = ['image', 'title', 'category', 'price'];

  constructor(private _productService: ProductsService) {
    this._productService
      .getAll()
      .subscribe((result) => (this.list$ = <ProductModel[]>result));
  }
}
