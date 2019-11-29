import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente2 } from '../../interfaces/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-prod',
  templateUrl: './menu-prod.page.html',
  styleUrls: ['./menu-prod.page.scss'],
})
export class MenuProdPage implements OnInit {

  busca: any[] = [];
  textoBuscar = '';
componentes: Observable<Componente2[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getEtniaProd()
    .subscribe( busca =>{
      // console.log(busca);
      this.busca = busca;
    } );

    this.componentes = this.dataService.getMenuProd();
  }
  buscar( event ) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }


}
