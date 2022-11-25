import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products',
    component: ProductListComponent
  }])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
