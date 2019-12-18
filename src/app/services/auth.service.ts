import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor( public afAuth: AngularFireAuth ) {

    afAuth.authState.subscribe(user => {
      this.isLogged = user;
    });

  }

  //  Login
onLogin( user: User ){
return new Promise((resolve, rejected) =>{
  this.afAuth.auth.signInWithEmailAndPassword( user.email, user.password)
  .then( user => {
    console.log(user);
    resolve(user);
  }).catch( err => rejected(err));
})
}
}
