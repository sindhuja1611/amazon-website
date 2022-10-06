import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { user } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    let role = localStorage.getItem('user');

    if (role == "admin" || role == "update") {
      return true;
    }




    else {
      alert("admin usage");
      this.router.navigate(['user-login']);
      return false;
    }
  }

}
