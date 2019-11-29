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
async onLogin( user: User ){
  try{
    return await this.afAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  } catch (error){
    console.log('Error en loguearse', error);
  }
}

// Registro

async onRegister( user: User ){
  try{
    return await this.afAuth.auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );

  } catch (error){
console.log('Error en registrase v:');
  }
}

}
