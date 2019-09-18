import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {Info} from '../models/info';
import { Observable } from 'rxjs';
import { IonItemDivider } from '@ionic/angular';

 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  Profile_detail: AngularFirestoreCollection<Info>;
  Profile_details: Observable<Info[]>;
  profileDoc: AngularFirestoreDocument<Info>;
 
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ){
    
  }
  get_user_details(value)
  {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.firestore.collection('user').doc(currentUser.uid).collection('details').add({
        name: value.name,
        age: value.age,
        gender: value.gender,
        habit: value.habit
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })

  }

  show_details(){
    let currentUser = firebase.auth().currentUser;
    this.Profile_details =  this.firestore.collection('user').doc(currentUser.uid).collection('details').valueChanges();
    return this.Profile_details; 
  }

  update_details(info:Info){
    
    let currentUser = firebase.auth().currentUser;
    this.profileDoc = this.firestore.collection('user').doc(currentUser.uid + '/details/');
    this.profileDoc.update(info);
    
  }
  
  
}