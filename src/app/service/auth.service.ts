import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn=false
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      this.isLoggedIn=true
        localStorage.setItem('user',JSON.stringify(res.user))
    
        
       

    }, err => {
      
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
      this.router.navigate(['/user-login']);
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
