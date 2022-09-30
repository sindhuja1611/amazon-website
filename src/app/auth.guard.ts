import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,private router : Router) { }
  canActivate(){

   if(this.auth.IsLoggedIn())
   {
      return true;
    }
    alert("you have not logged in");
    this.router.navigate(['user-login']);
    return false;
   
    
  }
  
}
