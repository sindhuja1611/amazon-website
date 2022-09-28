
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
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DescriptionService } from 'src/app/service/description.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public total !: number;


  constructor(private descriptionService : DescriptionService,private cartService : CartService) {}

  ngOnInit(): void {
    this.descriptionService.getProducts()
    .subscribe(res=>{
      this.products = res;
      
    })
  }
 
   emptycart(){
    this.descriptionService.removeAll();
  }

      addtocart(item: any){
        this.emptycart();
        this.cartService.addtoCart(item);
   
      }

  }

  
