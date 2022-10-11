import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';




@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProductsComponent }
    ])],
  exports: [RouterModule]
})
export class ShopRoutingModule { constructor(){
  console.log("ShopRouting  Works!!");
}}