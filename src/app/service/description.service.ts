import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  public ItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.ItemList.push(...product);
    this.productList.next(product);
  }

 

  add(product : any){
    this.ItemList.push(product);
    this.productList.next(this.ItemList);
    
  }
  removeAll(){
    this.ItemList = [];
  }
}