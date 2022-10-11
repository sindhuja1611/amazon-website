import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitComponent } from './visit.component';




@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: VisitComponent }
    ])],
  exports: [RouterModule]
})
export class VisitRoutingModule { constructor(){
 
}}