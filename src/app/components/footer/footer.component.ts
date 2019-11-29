import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/user.class';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() titulo: string;
  user: User = new User();
  // var: any = [];

  constructor( private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth ) { }

  ngOnInit() {}

  onLogout(){
    console.log('Cerrar Sesión');
    console.log(this.user.email);
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
