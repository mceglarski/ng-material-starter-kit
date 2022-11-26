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

@NgModule({
  declarations: [AppComponent, ProductListComponent, CategoriesListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
