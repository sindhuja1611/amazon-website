import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public total !: number;


  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
        
     // this.grandTotal = this.cartService.getTotalPrice();
      if(this.products) this.getTotal(this.products);
     
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
 
   emptycart(){
    this.cartService.removeAllCart();
  }
  increment(item : any){
    if(item.quantity!=5){
      item.quantity = item.quantity+1;
    }
    this.getTotal(this.products);
  }
  decrement(item : any){
    if(item.quantity!=1){
      item.quantity = item.quantity-1;
    }
    this.getTotal(this.products);
   }
  
  getTotal(Product:any){
    let total=0;
    for(const item of Product)
    total+=item.price * item.quantity;
    this.total=total;
  }


  }

  

