import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent {
  public categoryList$: Observable<string[]> =
    this._categoriesService.getAllCategories();

  constructor(private _categoriesService: CategoriesService) {}
}
