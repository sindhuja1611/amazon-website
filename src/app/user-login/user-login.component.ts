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

  email: string = '';
  password: string = '';
  isLoggedIn = false

  public usr !: any;


  constructor(private auth: AuthService, private fireauth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  login() {

    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (this.email == '') {
      alert('Please enter email');
      return;
    }

   
    else if (this.email == '') {
      alert('Please enter your user email id');
    }
    else if (!filter.test(this.email)) {
      alert('Invalid email');
      this.email='';
    }
    else if (this.password == '') {
      alert('Please enter password');
      return;
    }

    else if ((this.email == "admin@10decoders.in") && (this.password == "admin10d")) {
      alert("welcome Admin");
      this.email = "admin@10decoders.in";
      this.password = "admin10d"
      localStorage.setItem('user', 'admin')
      this.auth.login(this.email, this.password);

      this.router.navigate(['header']);

    }

    else {
      this.fireauth.signInWithEmailAndPassword(this.email, this.password).then(res => {
        this.isLoggedIn = true


        this.usr = res.user?.email;
        console.log(this.usr);

        localStorage.setItem('user', JSON.stringify(res.user))
        alert("login successful");
        this.router.navigate(['/products']);




      })


    }
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }




}





