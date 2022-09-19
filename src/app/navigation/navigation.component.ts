import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public Discount !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  dis(){
     this.Discount=this.grandTotal-5;
     return this.Discount;
  }   

}
