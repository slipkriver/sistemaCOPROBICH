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
  constructor( private router: Router,
               private authSvc: AuthService,
               public navCtrl: NavController,
               public menu : MenuController) 
               { 
                this.menu.enable(false);
                this.menu.swipeEnable(false);
               }

  ngOnInit() {
  }

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user){
      console.log('Bienvenido: ', this.user.email);
      this.router.navigateByUrl('/');
    }
  }

  ionViewWillLeave(){
    this.menu.enable(true);
    this.menu.swipeEnable(true);
    }

}
