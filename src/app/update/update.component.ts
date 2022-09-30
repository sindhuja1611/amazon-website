import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DescriptionService } from 'src/app/service/description.service';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  email : string='';
  password : string = '';
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

  constructor(private auth: AuthService, private data: DataService,private cartService : CartService,private router : Router,private afs : AngularFirestore,private descriptionService : DescriptionService) { }

public products : any = [];

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
        
      
    })
    if((this.email=="admin@10decoders.in")&&(this.password=="admin10d")){
      alert("welcome Admin"); 
      this.email="admin@10decoders.in";
      this.password="admin10d"
      localStorage.setItem('user','update')
     }
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


  this.data.updateProduct(item);

  this.resetForm();

  alert("checking done");

    }

    empty(){
      this.descriptionService.removeAll();
    }

  deleteProduct(item: Product) {
    if (window.confirm('Are you sure you want to delete '+ ' ?')) {
      this.data.deleteProduct(item);
    }
  }

}

