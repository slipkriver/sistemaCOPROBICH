import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingreso-prod',
  templateUrl: './ingreso-prod.page.html',
  styleUrls: ['./ingreso-prod.page.scss'],
})
export class IngresoProdPage implements OnInit {

prod_fnacimiento: Date = new Date();
etnia: Observable<any>;
genero: Observable<any>;
academico: Observable<any>;
discapacidad: Observable<any>;
check: any;

  productor = {
    prod_actividad: '',
    prod_agua: '',
    prod_alcantarillado: '',
    prod_alumbrado: '',
    prod_apellidom: '',
    prod_apellidop: '',
    prod_canton: '',
    prod_cargas: '',
    prod_cedula: '',
    prod_codigo: '',
    prod_comunidad: '',
    prod_correo: '',
    prod_direccion: '',
    prod_discapacidad: '',
    prod_energia: '',
    prod_establecimiento: '',
    prod_etnia: '',
    prod_fingreso: '',
    prod_finicio: '',
    prod_fnacimiento: '',
    prod_genero: '' ,
    prod_horast: '',
    prod_id: '',
    prod_imagen: '',
    prod_instruccion: '',
    prod_internet: '',
    prod_ndiscapacidad: '',
    prod_nombres: '',
    prod_pais: '',
    prod_parroquia: '',
    prod_pdiscapacidad: '',
    prod_provincia: '',
    prod_referencia: '',
    prod_tel1: '',
    prod_tel2: '',
    prod_telefono: '',
    prod_tproductor: '',
    prod_transporte: ''
  };

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.etnia = this.dataService.getEtniaProd();
    this.genero = this.dataService.getGenProd();
    this.academico = this.dataService.getAcadProd();
    this.discapacidad = this.dataService.getDiscProd();

  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log( this.productor );
  }

  cambioFecha( event ) {
    // console.log('ionChange', event );
    //  console.log('Date', new Date( event.detail.value ) );
  }
  onClick( check ) {
    // console.log(check);
  }
}
