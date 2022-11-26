import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
