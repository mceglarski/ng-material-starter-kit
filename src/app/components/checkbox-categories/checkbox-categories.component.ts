import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-checkbox-categories',
  templateUrl: './checkbox-categories.component.html',
  styleUrls: ['./checkbox-categories.component.scss'],
})
export class CheckboxCategoriesComponent {
  public categoryList$: Observable<string[]> =
    this._categoriesService.getAllCategories();

  constructor(private _categoriesService: CategoriesService) {}
}
