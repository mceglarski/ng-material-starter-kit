import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(
    void 0
  );
  public list$: Observable<ProductModel[]> = this._productService.getAll();
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  public refreshedList$: Observable<ProductModel[]> = this.refresh$.pipe(
    switchMap((data) => this._productService.getAll())
  );

  constructor(private _productService: ProductsService) {}

  public deleteProduct(id: number): void {
    this._productService
      .delete(id)
      .subscribe(() => this._refreshSubject.next());
  }
}
