import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  public list$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductsService) {}
}
