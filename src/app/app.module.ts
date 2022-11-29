import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CategoriesListComponent } from './components/product/categories-list/categories-list.component';
import { CategoriesService } from './services/categories.service';
import { CryptoCurrenciesService } from './services/crypto-currencies.service';
import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';
import { MatChipsModule } from '@angular/material/chips';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { PublicHolidaysService } from './services/public-holidays.service';
import { MatSelectModule } from '@angular/material/select';
import { CheckboxCategoriesComponent } from './components/product/checkbox-categories/checkbox-categories.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesMenuComponent } from './components/product/categories-menu/categories-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductSearchComponent } from './components/product/product-search/product-search.component';
import { MatTableModule } from '@angular/material/table';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeService } from './services/employee.service';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { UserService } from './services/user.service';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat/cat-fact/cat-fact.component';
import { CatFactService } from './services/cat-fact.service';
import { AgePredictionService } from './services/age-prediction.service';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartDetailComponent } from './components/product/cart-detail/cart-detail.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoriesListComponent,
    CryptoCurrenciesComponent,
    PublicHolidaysComponent,
    CheckboxCategoriesComponent,
    CategoriesMenuComponent,
    ProductSearchComponent,
    ProductFormComponent,
    EmployeeFormComponent,
    LoginComponent,
    RegisterFormComponent,
    ProductDetailComponent,
    CatFactComponent,
    AgePredictionComponent,
    CartDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [
    ProductsService,
    CategoriesService,
    CryptoCurrenciesService,
    PublicHolidaysService,
    EmployeeService,
    UserService,
    CatFactService,
    AgePredictionService,
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
