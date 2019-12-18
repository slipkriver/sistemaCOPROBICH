import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Componente2 } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getMenuProd(){
    return this.http.get<Componente2[]>('/assets/data/menuProd.json');
  }

  getEtniaProd(){
    return this.http.get<any[]>('/assets/data/productores/etnia.json');
  }

  getGenProd(){
    return this.http.get('/assets/data/productores/genero.json');
  }

  getAcadProd(){
    return this.http.get('/assets/data/productores/academico.json');
  }

  getDiscProd(){
    return this.http.get('/assets/data/productores/discapacidad.json');
  }

  getUsers() {
    return this.http.get('/assets/data/user.json');
  }
}
