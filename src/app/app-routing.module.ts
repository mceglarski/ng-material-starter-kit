import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CategoriesListComponent } from './components/product/categories-list/categories-list.component';
import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CheckboxCategoriesComponent } from './components/product/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/product/categories-menu/categories-menu.component';
import { ProductSearchComponent } from './components/product/product-search/product-search.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartDetailComponent } from './components/product/cart-detail/cart-detail.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { JokeComponent } from './components/joke/joke.component';
import { FilteredProductListComponent } from './components/product/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/product/sorted-product-list/sorted-product-list.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { BeerComponent } from './components/beer/beer.component';
import { ProductGridListComponent } from './components/product/product-grid-list/product-grid-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
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
      {
        path: 'categories-menu',
        component: CategoriesMenuComponent,
      },
      {
        path: 'product-search',
        component: ProductSearchComponent,
      },
      {
        path: 'create-product',
        component: ProductFormComponent,
      },
      {
        path: 'create-employee',
        component: EmployeeFormComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterFormComponent,
      },
      {
        path: 'cat-fact',
        component: CatFactComponent,
      },
      {
        path: 'age/:name',
        component: AgePredictionComponent,
      },
      {
        path: 'cart/:id',
        component: CartDetailComponent,
      },
      {
        path: 'user/:id',
        component: UserDetailComponent,
      },
      {
        path: 'joke/:type',
        component: JokeComponent,
      },
      {
        path: 'products/:category',
        component: FilteredProductListComponent,
      },
      {
        path: 'sorted-products',
        component: SortedProductListComponent,
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent,
      },
      {
        path: 'beers-with-pagination',
        component: BeerComponent,
      },
      {
        path: 'product-grid-list',
        component: ProductGridListComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
