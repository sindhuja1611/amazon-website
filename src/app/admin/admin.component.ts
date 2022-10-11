import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { CartService } from 'src/app/service/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  firstname: string = '';

  productsList: Product[] = [];
  productObj: Product = {
    id: '',
    pid: '',
    title: '',

    image: '',
    category: '',

    price: 0,
    quantity: 0,

  };
  id: string = '';
  pid: string = '';
  title: string = '';
  image: string = '';
  category: string = '';
  price = 0;
  quantity = 0;

  constructor(private auth: AuthService, private data: DataService, private cartService: CartService, private toastr: ToastrService) { }
  public cartItemList: any = []
  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {

    this.data.getAllProducts().subscribe(res => {

      this.productsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

  resetForm() {
    this.id = '';
    this.pid = '';
    this.title = '';
    this.image = '';

    this.category = '';

    this.price = 0;
    this.quantity = 0;
  }

  addProduct() {
    // if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
    //   alert('Fill all input fields');
    //   return;
    // }
    
    var letters = /^[A-Za-z]+$/;
    
    
    if(this.pid== '') 
    {
      this.toastr.warning('Product Id Empty');
    }
  
    else if(this.title== '') 
    {
      this.toastr.warning('Product Name Please');
    }
    else if(!letters.test(this.title)) 
    {
      this.toastr.warning('Product Name requires only alphabets');
      this.title='';
    }
    else if(this.image== '') 
    {
      this.toastr.warning('Image field Empty!');
    }
    else if(this.category== '') 
    {
      this.toastr.warning('Description field Empty!');
    }
    else if(!letters.test(this.category)) 
    {
      this.toastr.warning('Description requires only alphabets');
      this.category='';
    }
    else if(this.price== 0) 
    {
      this.toastr.warning('Price field Empty!');
    }
    else if(this.quantity== 0) 
    {
      this.toastr.warning('Quantity field Empty!');
    }
    else
    {
    this.productObj.id = "";
    this.productObj.pid = this.pid;
    this.productObj.title = this.title;
    this.productObj.image = this.image;
    this.productObj.category = this.category;
    this.productObj.price = this.price;
    this.productObj.quantity = this.quantity;
    this.data.addProduct(this.productObj);
    this.toastr.success('Product Added Successfully');
    this.resetForm();
    }
  }


  update(item: any) {

    this.cartService.update(item);
   


  }

  deleteProduct(item: Product) {
    if (window.confirm('Are you sure you want to delete ' + ' ?')) {
      this.data.deleteProduct(item);
    }
  }
  logout() {
    this.auth.logout();
  }
  
}
