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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoriesListComponent,
    CryptoCurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
  ],
  providers: [ProductsService, CategoriesService, CryptoCurrenciesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
