import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';


import { VisitComponent } from './visit.component';
import { VisitRoutingModule } from './visit.routing.module';


@NgModule({
  declarations:[
VisitComponent
  ],
  imports: [CommonModule,VisitRoutingModule],
  
})
export class VisitModule { 
  constructor(){
    
  }
}