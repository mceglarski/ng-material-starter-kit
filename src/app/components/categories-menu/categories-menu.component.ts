import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
})
export class CategoriesMenuComponent {
  public categoryList$: Observable<string[]> =
    this._categoriesService.getAllCategories();

  constructor(private _categoriesService: CategoriesService) {}
}
