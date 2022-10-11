
import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { ToastrService } from 'ngx-toastr';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private toastr: ToastrService) { }


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


  updateProduct(item: any,id:any) {
    // this.deleteStudent(student);
  
 console.log("Inbound data",item);

// Your Firebase SDK Initialization code here

const db = getFirestore(); // initialize Firestore

const docRef = doc(db,"Students",id);



updateDoc(docRef, item)
.then(docRef => {
    console.log("A New Document Field has been added to an existing document");
    this.toastr.success('Updated Successfully ');
   
})
.catch(error => {
    console.log(error);
})
  }

  public filterCategory : any  
  productsList: Product[] = [];
  public productList : any ;


    
    
}
