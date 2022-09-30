import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // get all students
  getAllProducts() {
    return this.afs.collection('/Students').snapshotChanges();
  }
  addProduct(item : Product) {
    item.id = this.afs.createId();
    return this.afs.collection('/Students').add(item);
  }
  // delete student
  deleteProduct(item : Product) {
     this.afs.doc('/Students/'+item.id).delete();
  }


  updateProduct(item: Product) {
    // this.deleteStudent(student);
     
    this.afs.doc('/Students/'+item.id).update(item);
    console.log(item);
    alert("updated");
    
   
  }

  public filterCategory : any  
  productsList: Product[] = [];
  public productList : any ;


    
    
}
