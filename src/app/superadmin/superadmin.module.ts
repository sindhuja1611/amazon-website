import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';


import { CartComponent } from './cart/cart.component';
import { SuperadminRoutingModule } from './superadmin-routing.module';


@NgModule({
  declarations:[
CartComponent
  ],
  imports: [CommonModule,SuperadminRoutingModule],
  
})
export class SuperadminModule { 
  constructor(){
    console.log("CartAdmin Works!!");
  }
}



    
