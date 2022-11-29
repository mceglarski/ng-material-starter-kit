import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  public productDetails$: Observable<ProductModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._productService.getOne(data['id']))
    );

  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
