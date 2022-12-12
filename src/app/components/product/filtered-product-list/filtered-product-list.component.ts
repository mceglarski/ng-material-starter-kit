import { Component } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { combineLatest, map, Observable, Subject } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  styleUrls: ['./filtered-product-list.component.scss'],
})
export class FilteredProductListComponent {
  public readonly categories$: Observable<string[]> =
    this._categoriesService.getAllCategories();

  public readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRoute.params,
  ]).pipe(
    map(([products, params]: [ProductModel[], Params]) => {
      return products.filter(
        (product: ProductModel) => product.category === params['category']
      );
    })
  );

  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  public productsAll$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.category$,
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) => {
      return products.filter((product) => product.category === category);
    })
  );

  constructor(
    private _categoriesService: CategoriesService,
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  public selectCategory(category: string): void {
    this._categorySubject.next(category);
  }
}
