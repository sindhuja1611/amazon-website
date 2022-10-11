import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PipeModule } from "../pipes/pipe.module";
import { DescriptionComponent } from "./description.component";
import { DesRoutingModule } from "./des.routing.module";

@NgModule({
    declarations:[
     DescriptionComponent   
    ],
    imports: [CommonModule,DesRoutingModule],
    
  })
  export class DesModule { 
    constructor(){
      console.log("SuperAdmin Works!!");
    }
  }