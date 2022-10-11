import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PipeModule } from "../pipes/pipe.module";
import { ProductsComponent } from "./products.component";
import { ShopRoutingModule } from "./shop.routing.module";

@NgModule({
    declarations:[
     ProductsComponent   
    ],
    imports: [CommonModule,ShopRoutingModule,PipeModule],
    
  })
  export class ShopModule { 
    constructor(){
      console.log("SuperAdmin Works!!");
    }
  }