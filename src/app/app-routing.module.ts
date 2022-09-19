import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'', redirectTo:'header',pathMatch:'full'},

  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'navigation', component: NavigationComponent},
  {path:'description', component: DescriptionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
