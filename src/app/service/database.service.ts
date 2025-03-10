import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {Info} from '../models/info';
import { Observable } from 'rxjs';
import { IonItemDivider } from '@ionic/angular';
import { Item } from '../models/item';

 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  Profile_detail: AngularFirestoreCollection<Info>;
  Profile_details: Observable<Info[]>;
  profileDoc: AngularFirestoreDocument<Info>;

  Flatmate_detail: AngularFirestoreCollection<Item>;
  Flatmate_details: Observable<Item[]>;
  FlatmateDoc: AngularFirestoreDocument<Item>;
 
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ){
    
  }
  get_user_details(value)
  {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.firestore.collection('user').doc(currentUser.uid).collection('details').doc(currentUser.uid).set({
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

  get_flatmte_preference(value)
  {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.firestore.collection('flatmate').doc(currentUser.uid).collection('preference').doc(currentUser.uid).set({
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

  show_flatmates(){
    let currentUser = firebase.auth().currentUser;
    this.Flatmate_details =  this.firestore.collection('flatmate').doc(currentUser.uid).collection('preference').valueChanges();
    return this.Flatmate_details; 
  }

  update_details(info:Info){
    
    let currentUser = firebase.auth().currentUser;
    this.profileDoc = this.firestore.collection('user').doc(currentUser.uid).collection('details').doc(currentUser.uid);
    this.profileDoc.update(info);
    
  }
  
  
}