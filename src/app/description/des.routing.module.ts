import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description.component';




@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DescriptionComponent }
    ])],
  exports: [RouterModule]
})
export class DesRoutingModule { constructor(){

}}