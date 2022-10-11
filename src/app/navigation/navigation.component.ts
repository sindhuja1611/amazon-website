import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  public total !: number;
  public Discount !: number;
  constructor(private cartService: CartService, private data: DataService,private toastr: ToastrService, private router: Router) { }

  email: string = '';
  address: string = '';
  firstname: string = '';
  lastname: string = '';

  cc: string = '';
  ccno: string = '';
  ccexp: string = '';
  cvv: string = '';

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        if (this.products) this.getTotal(this.products);

      })
  }



  dis() {

    this.Discount = this.total - 50;
    return this.Discount;
  }
  getTotal(Product: any) {
    let total = 0;
    for (const item of Product)
      total += item.price * item.quantity;
    this.total = total;
  }

  check()
  {
    var mob = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(this.firstname == '') 
    {
      this.toastr.warning('First Name Please');
    }
    else if(!letters.test(this.firstname)) 
    {
      this.toastr.warning('FirstName requires only alphabets');
      this.firstname='';
    }
    else if(this.lastname == '') 
    {
      this.toastr.warning('Last Name Please');
    }
    else if(!letters.test(this.lastname)) 
    {
      this.toastr.warning('LastName requires only alphabets');
      this.lastname='';
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
    else if (this.address == '') 
    {
      this.toastr.warning('Address Field Empty');
    }
    else if (this.cc == '') 
    {
      this.toastr.warning('Credit Card Field Empty');
    }
    else if (this.ccno == '') 
    {
      this.toastr.warning('Card Number Field Empty');
    }
    else if(!mob.test(this.ccno)) 
    {
      this.toastr.warning('Credit Card Numbers requires only Digits');
      this.ccno='';
    }
    else if (this.ccexp == '') 
    {
      this.toastr.warning('Exp Field Empty');
    }
    else if (this.cvv == '') 
    {
      this.toastr.warning('CVV Field Empty');
    }
    
    
  
    else{
      this.router.navigate(['/visit']);
    }
   
  }
}
