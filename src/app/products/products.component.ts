// import { Component, OnInit } from '@angular/core';

// import { CartService } from 'src/app/service/cart.service';
// import { ApiService } from 'src/app/service/api.service';
// import { DescriptionService } from 'src/app/service/description.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {

//   public productList : any ;

//   public products : any = [];
//   constructor(private api : ApiService, private cartService : CartService, private descriptionService : DescriptionService) { }

//   ngOnInit(): void {
//     this.api.getProduct()
//     .subscribe(res=>{
//       this.productList = res;
//       console.log(res);
//       this.productList.forEach((a:any) => {
        
//         Object.assign(a,{quantity:1,total:a.price});
//     });
//   });
//   }
//   addtocart(item: any){
//     this.cartService.addtoCart(item);
    
//   }

//   add(item: any){
//     this.descriptionService.add(item);

//   }
//   empty(){
//     this.descriptionService.removeAll();
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from 'src/app/service/data.service';
import { CartService } from 'src/app/service/cart.service';
import { DescriptionService } from 'src/app/service/description.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
clicked=false;

        
  productsList: Product[] = [];
  productObj: Product = {
    id: '',
    pid:'',
    category: '',
    image:'',
    title: '',
    price:0,
    quantity:0,
    
  };
  id: string = '';
  pid: string = '';
  image:string='';
  category: string = '';
  
  title: string = '';
  price=0;
  quantity=0;

  constructor(private auth: AuthService, private data: DataService,private cartService : CartService,private descriptionService : DescriptionService) { }

  ngOnInit(): void {
 
    this.getAllProducts();

        

  }

  // register() {
  //   this.auth.logout();
  // }

  getAllProducts() {

    this.data.getAllProducts().subscribe(res => {

      this.productsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        this.productsList.forEach((a:any) => {
        
          Object.assign(a,{quantity:1});
     });
        return data;

        })

    }, err => {
      alert('Error while fetching student data');
    })

  }
  addtocart(item: any){
 
      this.cartService.addtoCart(item);
     alert("Item Successfully Added to cart");
     
    }
  add(item: any){
    this.descriptionService.add(item);
  }
    empty(){
          this.descriptionService.removeAll();
        }

  

}


