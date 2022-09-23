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

  public value !: number;

  public x !: number;

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
        
      this.grandTotal = this.cartService.getTotalPrice();
      this.total = this.cartService.getTotal();
     
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
   changeFn(item : any){
    this.cartService.changeItem(item);
  
  }
   emptycart(){
    this.cartService.removeAllCart();
  }
  increment(item : any){
    if(item.quantity!=5){
      item.quantity = item.quantity+1;
    }
   
  }
  decrement(item : any){
    if(item.quantity!=1){
      item.quantity = item.quantity-1;
    }
   }
  
  

  }

  

