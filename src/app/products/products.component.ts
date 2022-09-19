import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { DescriptionService } from 'src/app/service/description.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any ;

  public products : any = [];
  constructor(private api : ApiService, private cartService : CartService, private descriptionService : DescriptionService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
    });
  });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
    
  }
  add(item: any){
    this.descriptionService.add(item);
    
  }

}




