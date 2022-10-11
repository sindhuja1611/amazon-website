import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private auth: AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {


    var mob = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(this.uname == '') 
    {
      this.toastr.warning('User Name Please');
    }
    else if(!letters.test(this.uname)) 
    {
      this.toastr.warning('UserName requires only alphabets');
      this.uname='';
    }
    else if (this.mob == '') 
    {
      this.toastr.warning('Mobile Field Empty');
    }
    else if (!mob.test(this.mob))
     {

      this.toastr.warning('Mobile field required only Numbers');
      this.mob='';
    }
    else if (this.email == '') 
    {
      this.toastr.warning('Please enter email');
      
    }

    else if (!filter.test(this.email))
     {
      this.toastr.warning('Invalid email');
      this.email = '';
    }
    else if (this.password == '') 
    {
      this.toastr.warning('Please enter password');
      return;
    }
    else {
      this.auth.register(this.email, this.password);

      this.email = '';
      this.password = '';

    }

  }

}



