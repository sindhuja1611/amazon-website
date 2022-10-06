import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
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
  constructor(private cartService: CartService, private data: DataService) { }



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
}
