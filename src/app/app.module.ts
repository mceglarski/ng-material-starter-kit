import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesService } from './services/categories.service';
import { CryptoCurrenciesService } from './services/crypto-currencies.service';
import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';
import { MatChipsModule } from '@angular/material/chips';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { PublicHolidaysService } from './services/public-holidays.service';
import { MatSelectModule } from '@angular/material/select';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { MatTableModule } from '@angular/material/table';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
