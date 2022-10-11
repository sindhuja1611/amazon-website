import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CartComponent }
])],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }






