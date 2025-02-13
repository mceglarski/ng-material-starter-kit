import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  public productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl(),
  });

  public categoriesList$: Observable<string[]> =
    this._categoriesService.getAllCategories();

  constructor(
    private _productService: ProductsService,
    private _categoriesService: CategoriesService
  ) {}

  public onProductFormSubmitted(productForm: FormGroup): void {
    this._productService
      .create({
        title: productForm.get('title')?.value,
        price: productForm.get('price')?.value,
        description: productForm.get('description')?.value,
        category: productForm.get('category')?.value,
        image: productForm.get('image')?.value,
      })
      .subscribe();
  }
}
