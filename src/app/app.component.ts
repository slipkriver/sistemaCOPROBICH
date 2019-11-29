import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import {Componente} from './interfaces/interface';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { User } from './shared/user.class';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  valor: any = '';
  user: User = new User();
  componentes: Observable<Componente[]>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService: DataService,
    private authSvc: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.componentes = this.dataService.getMenuOpts();
    });
  }

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user){
      this.valor = this.user.email;
      console.log(user);
    }
  }
}
