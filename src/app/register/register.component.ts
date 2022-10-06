import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  uname: string = '';
  mob: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {


    var mob = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(this.uname == '') 
    {
      alert('Please Enter UserName');
    }
    else if(!letters.test(this.uname)) 
    {
      alert('User name field required only alphabet characters');
      this.uname='';
    }
    else if (this.mob == '') 
    {
      alert('Please Enter Mobile Number');
    }
    else if (!mob.test(this.mob))
     {

      alert('Mobile field required only Numbers');
      this.mob='';
    }
    else if (this.email == '') 
    {
      alert('Please enter email');
      
    }

    else if (!filter.test(this.email))
     {
      alert('Invalid email');
      this.email = '';
    }
    else if (this.password == '') 
    {
      alert('Please enter password');
      return;
    }
    else {
      this.auth.register(this.email, this.password);

      this.email = '';
      this.password = '';

    }

  }

}



