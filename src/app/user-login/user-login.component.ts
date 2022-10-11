import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';


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


  constructor(private auth: AuthService, private fireauth: AngularFireAuth, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {

    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (this.email == '') {
      this.toastr.warning('Please enter email');
      return;
    }

   
    else if (this.email == '') {
      this.toastr.warning('Please enter your user email id');
    }
    else if (!filter.test(this.email)) {
      this.toastr.warning('Invalid email');
      this.email='';
    }
    else if (this.password == '') {
      this.toastr.warning('Please enter password');
      return;
    }

    else if ((this.email == "admin@10decoders.in") && (this.password == "admin10d")) {
  
      this.email = "admin@10decoders.in";
      this.password = "admin10d"
      localStorage.setItem('user', 'admin')
      this.auth.login(this.email, this.password);
      this.toastr.success('Welcome Admin');
      this.router.navigate(['/header']);
       console.log("welcome");
    }

    else {
      this.fireauth.signInWithEmailAndPassword(this.email, this.password).then(res => {
     


        this.usr = res.user?.email;
     
        localStorage.setItem('user', JSON.stringify(res.user))
        this.toastr.success('Login Successfully');
        
        this.router.navigate(['/products']);

        



      }, err => {
        this.toastr.warning("To Login Kindly Register");
        this.router.navigate(['/user-login']);
        this.email='';
        this.password='';
    })


    }
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }




}





