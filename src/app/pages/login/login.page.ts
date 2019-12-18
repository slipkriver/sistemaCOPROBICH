import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/user.class';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  cote: string = '';


  constructor( private router: Router,
               private authSvc: AuthService,
               public navCtrl: NavController,
               public menu: MenuController) 
               { 
                this.menu.enable(false);
                this.menu.swipeGesture(false);
               }

  ngOnInit() {
  }

  onLogin(){
    this.authSvc.onLogin(this.user).then( res => {
      console.log('Bienvenido: ', this.user.email);
      this.cote = this.user.email;
      this.router.navigate(['/inicio']);
    }).catch( err => alert('Los datos ingresados no son correctos :v'));
  }

  ionViewDidLoad(){
    this.menu.enable(false);
  }

  ionViewWillLeave(){
    this.menu.enable(true);
    this.menu.swipeGesture(true);
    }
}
