import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email : string='';
  password : string = '';
  isLoggedIn=false

  constructor(private auth : AuthService,private fireauth : AngularFireAuth,private router : Router) { }

  ngOnInit(): void {
  }

  login() {

   if((this.email=="admin@10decoders.in")&&(this.password=="admin10d")){
    alert("welcome Admin"); 
    this.email="admin@10decoders.in";
    this.password="admin10d"
    localStorage.setItem('user','admin')
    this.auth.login(this.email,this.password);

    this.router.navigate(['header']);

   }
   else{
    this.fireauth.signInWithEmailAndPassword(this.email,this.password).then( res => {
      this.isLoggedIn=true
      console.log(res.user);
        localStorage.setItem('user',JSON.stringify(res.user))
    alert("login successful");
    this.router.navigate(['/products']);  
       

    }, err => {

        alert("To Login Kindly Register..");
        this.router.navigate(['/user-login']);
    })

  }
}

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
 


  
}





  