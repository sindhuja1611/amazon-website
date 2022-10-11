

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { CartService } from 'src/app/service/cart.service';
import { DescriptionService } from 'src/app/service/description.service';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  email: string = '';
  password: string = '';
  public totalItem: number = 0;
  public filterCategory: any
  searchKey: string = "";
   user: string = "";
   public usr:string="";
  public searchTerm !: string;
  productsList: Product[] = [];
  public productList: any;
  productObj: Product = {
    id: '',
    pid: '',
    category: '',
    image: '',
    title: '',
    price: 0,
    quantity: 0,

  };
  id: string = '';
  pid: string = '';
  image: string = '';
  category: string = '';

  title: string = '';
  price = 0;
  quantity = 0;

  constructor(private router:Router,private auth: AuthService, private toastr: ToastrService, private data: DataService, private cartService: CartService, private descriptionService: DescriptionService) {
    this.cartService.token.subscribe((val: any) => {
      this.user = val;
      console.log(this.user);
    })


    let currentUser = JSON.parse(localStorage.getItem("user") || '');
    console.log("user details", currentUser.email);

    this.usr = this.user
   this.router.navigate(['/products']);
  }

  ngOnInit(): void {




    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
        
      })
      


    this.getAllProducts();



  }


  getAllProducts() {
    this.data.getAllProducts()
      .subscribe(res => {
        this.productList = res;


        this.filterCategory = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;

          return data;

        });
        this.productList = this.filterCategory;
 



      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

  }





  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }






  logout() {
    this.auth.logout();
    
  }


  addtocart(item: any) {



    if (this.cartService.cartItemList.length === 0) {


      this.cartService.addtoCart(item);
      this.toastr.success('Item Successfully Added to Cart');

    }
    else {


      const existsID = this.cartService.cartItemList.find((value: any) => (value.id === item.id))
      if (existsID) {

        this.toastr.warning('Product Already Added Go to Cart');


      }
      else {
        this.cartService.addtoCart(item);
        this.toastr.success('Item Successfully Added to Cart');
      }


    }
  }
  add(item: any) {


    this.descriptionService.add(item);
  }
  empty() {
    this.descriptionService.removeAll();
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }


}






