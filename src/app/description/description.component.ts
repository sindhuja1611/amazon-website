
// import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/model/product';
// import { AuthService } from 'src/app/service/auth.service';
// import { DataService } from 'src/app/service/data.service';
// import { CartService } from 'src/app/service/cart.service';
// import { DescriptionService } from 'src/app/service/description.service';
// import { BehaviorSubject } from 'rxjs';

// @Component({
//   selector: 'app-description',
//   templateUrl: './description.component.html',
//   styleUrls: ['./description.component.css']
// })
// export class DescriptionComponent implements OnInit {

//   public products : any = [];
//   public grandTotal !: number;
//   public total !: number;



//   constructor(private auth: AuthService, private data: DataService,private cartService : CartService,private descriptionService : DescriptionService) { }
//   public ItemList : any =[]
//   public productList = new BehaviorSubject<any>([]);

//   ngOnInit(): void {
//     this.descriptionService.getProducts()
//     .subscribe(res=>{
//       this.products = res;
//       console.log(res);

//     })

//   }

//   getProducts(){
//     return this.productList.asObservable();
//   }

//   setProduct(product : any){
//     this.ItemList.push(...product);
//     this.productList.next(product);
//   }


//   // register() {
//   //   this.auth.logout();
//   // }




//   empty(){
//     this.descriptionService.removeAll();
//   }

//     addtocart(item: any){
//     this.cartService.addtoCart(item);

//   }


// }

import { Component, OnInit } from '@angular/core';
import { DescriptionService } from 'src/app/service/description.service';
import { CartService } from 'src/app/service/cart.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  public total !: number;
  public totalItem: number = 0;

  constructor(private descriptionService: DescriptionService, private cartService: CartService, private auth: AuthService) { }

  ngOnInit(): void {
    this.descriptionService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.totalItem = res.length;

      })
  }

  emptycart() {
    this.descriptionService.removeAll();
  }

  addtocart(item: any) {
    this.emptycart();
    if (this.cartService.cartItemList.length === 0) {


      this.cartService.addtoCart(item);
      alert("Item Successfully Added to cart")

    }
    else {


      const existsID = this.cartService.cartItemList.find((value: any) => (value.id === item.id))
      if (existsID) {

        alert("Product Already Added.. Go To Cart...");

      }
      else {
        this.cartService.addtoCart(item);
        alert("Item Successfully Added to cart");
      }


    }

  }


  logout() {
    this.auth.logout();
  }

}


