import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn=false
  
  public usr !: any;

  constructor(private fireauth : AngularFireAuth, private router : Router,private cartService: CartService) { }

  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      this.usr = res.user?.email;
      console.log(this.usr);

      localStorage.setItem('user', JSON.stringify(res.user))
      

    }, err => {
      alert("To Login, Kindly Register..")
        this.router.navigate(['/user-login']);
    })
  }

  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      this.isLoggedIn=true
      localStorage.setItem('user',JSON.stringify(res.user))
      alert('Registration Successful');
    
      this.router.navigate(['/user-login']);
    }, err => {
    
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['/user-login']);
      this.cartService.removeAllCart();
      
    }, err => {
      alert(err.message);
    })
  }


  

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/products']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }

  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }

}
