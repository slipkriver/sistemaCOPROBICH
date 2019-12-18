import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interface';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as moment from 'moment';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarios: Observable<any>;
  componentes: Observable<Componente[]>;
  startDate = new Date(1990, 0, 1);
  minDate = new Date(1940, 0, 1);
  maxDate = new Date(2010, 0, 1);
  fechaNaci: Date = new Date();
  events: string[] = [];
  public dateString = "22-04-2017"; //whatever date string u have
  // public dateObject = moment(this.dateString, "DD-MM-YYYY").toDate();

  constructor( private menuCtrl: MenuController, private dataService: DataService ) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();
    this.usuarios = this.dataService.getUsers();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // event = moment(this.event, "DD-MM-YY").toDate();
    console.log(event.value);
    this.events.push(`${type}: ${event.value}`); 
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  click( event){
    console.log(event);
  }
}
