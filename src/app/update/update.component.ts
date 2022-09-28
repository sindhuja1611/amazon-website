import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productsList: Product[] = [];
  productObj: Product = {
    id:'',
    pid: '',
    title: '',
   
    image:'',
    category: '',
   
    price:0,
    quantity:0,
    
  };
  id: string = '';
  pid: string = '';
  title: string = '';
  image:string='';
  category: string = '';
  
 
  price=0;
  quantity=0;

  constructor(private auth: AuthService, private data: DataService,private cartService : CartService,private afs : AngularFirestore) { }

public products : any = [];

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
        
      
    })
  }


  // register() {
  //   this.auth.logout();
  // }

 
   resetForm() {
    this.id = '';
    this.pid = '';
    this.title = '';
    this.image = '';
   
    this.category = '';
   
    this.price=0;
    this.quantity=0;
   }

  addProduct() {
    // if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
    //   alert('Fill all input fields');
    //   return;
    // }

    this.productObj.id = "";
    this.productObj.pid = this.pid;
    this.productObj.title = this.title;
    this.productObj.image = this.image;
    this.productObj.category = this.category;
    this.productObj.price = this.price;
    this.productObj.quantity = this.quantity;
    this.data.addProduct(this.productObj);
    
    this.resetForm();

  }
//  updateProduct(item:Product){
  
//   this.addProduct();
//   this.data.deleteProduct(item);


//  }
 updateDoc(item:Product) {
  this.productObj.id = "";
  this.productObj.pid = this.pid;
  this.productObj.title = this.title;
  this.productObj.image = this.image;
  this.productObj.category = this.category;
  this.productObj.price = this.price;
console.log(this.productObj);

  this.data.updateProduct(item);

  this.resetForm();

  alert("checking done");

    }

  deleteProduct(item: Product) {
    if (window.confirm('Are you sure you want to delete '+ ' ?')) {
      this.data.deleteProduct(item);
    }
  }

}

