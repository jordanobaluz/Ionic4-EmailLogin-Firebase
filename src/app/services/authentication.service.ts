import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registerUser(value){
    return new Promise<any>( (resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  loginUser(value){
    return new Promise<any>( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }


  logoutUser(){
    return new Promise<any>( (resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then( ()=>{
          console.log("log out");
          resolve;
        }).catch( (error) => {
          reject();
        });
      }
    })
  }

  userDetail(){
    return firebase.auth().currentUser;
  }

}
