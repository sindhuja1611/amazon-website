import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DescriptionComponent } from './description/description.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'', redirectTo:'header',pathMatch:'full'},

  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'navigation', component: NavigationComponent},
  {path:'description', component: DescriptionComponent},
  {path:'user-login', component: UserLoginComponent},
  {path:'register', component: RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
