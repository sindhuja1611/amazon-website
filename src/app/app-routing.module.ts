import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DescriptionComponent } from './description/description.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { VisitComponent } from './visit/visit.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  
  {path:'', redirectTo:'user-login',pathMatch:'full'},
  {path:'header', component: HeaderComponent,canActivate:[RoleGuard]},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'navigation', component: NavigationComponent},
  {path:'description', component: DescriptionComponent},
  {path:'user-login', component: UserLoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'admin', component: AdminComponent},
  {path:'visit', component: VisitComponent},
  {path:'update', component: UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
