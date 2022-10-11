import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public token = new BehaviorSubject<string>("");
  
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
 
    this.cartItemList.push(product);
    
    this.productList.next(this.cartItemList);
    
    this.getTotalPrice();
   
  }

  add(product : any){
    
    this.cartItemList.push(product);
    
    this.productList.next(this.cartItemList);
    
 

  }
update(product : any){
    this.cartItemList=[];
    this.cartItemList.push(product);
    
    this.productList.next(this.cartItemList);
    
   

  }



  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  getTotal() : number{
    let total = 0;
    
    this.cartItemList.map((a:any)=>{


      total = a.price*a.quantity;
    })
    return total;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{

      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }


  

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
