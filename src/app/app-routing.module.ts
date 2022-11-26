import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';

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
      {
        path: 'crypto',
        component: CryptoCurrenciesComponent,
      },
      {
        path: 'public-holidays',
        component: PublicHolidaysComponent,
      },
      {
        path: 'checkbox-categories',
        component: CheckboxCategoriesComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
