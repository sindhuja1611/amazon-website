import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DescriptionService } from 'src/app/service/description.service';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public products : any = [];

  constructor(private cartService : CartService,private descriptionService : DescriptionService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log(this.products);
    
    })
  }


}

  
