import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './superadmin/cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DescriptionComponent } from './description/description.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { VisitComponent } from './visit/visit.component';
import { UpdateComponent } from './update/update.component';

import { RoleGuard } from './helpers/role.guard';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';


//const routes: Routes = [ 
  
  //{path:'', redirectTo:'user-login',pathMatch:'full'},
//   {path:'header', component: HeaderComponent,canActivate:[RoleGuard]},
//   {path:'products', component: ProductsComponent},
//   {path:'cart', component: CartComponent},
//   {path:'navigation', component: NavigationComponent},
//   {path:'description', component: DescriptionComponent},
//   {path:'user-login', component: UserLoginComponent},
//
//   {path:'admin', component: AdminComponent},

//   {path:'visit', component: VisitComponent},
//   {path:'update', component: UpdateComponent},
  
//   {path:'superadmin',loadChildren:()=>import('./superadmin/superadmin.module').then(mod=>mod.SuperadminModule)}  ,
//   {path:'shop',loadChildren:()=>import('./shop/shop.module').then(mod=>mod.ShopModule)}  ];

@NgModule({imports: [
  RouterModule.forRoot(
    
    [
      
      
      

      {
        path:'', component: LayoutComponent,
        
          children: [
            
           
           { path:'navigation', component: NavigationComponent},
           {path:'user-login', component: UserLoginComponent},
           {path:'register', component: RegisterComponent},
           {path:'visit',loadChildren:()=>import('./visit/visit.module').then(mod=>mod.VisitModule)}  ,
           {path:'description',loadChildren:()=>import('./description/des.module').then(mod=>mod.DesModule)}  ,
            {path:'cart',loadChildren:()=>import('./superadmin/superadmin.module').then(mod=>mod.SuperadminModule)}  ,
             {path:'products',loadChildren:()=>import('./products/shop.module').then(mod=>mod.ShopModule)}  
          ],
      },
     
      {path:'header', component: HeaderComponent,canActivate:[RoleGuard]},
      {path:'admin', component: AdminComponent},
      {path:'update', component: UpdateComponent},

  ], ),
],
exports: [RouterModule]
})
export class AppRoutingModule {

  


}
