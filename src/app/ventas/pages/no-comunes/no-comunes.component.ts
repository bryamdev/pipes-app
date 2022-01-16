import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect11
  nombre: string = 'Bryam';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Camila'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'//remplaza en '#' por
    //'other': `tenemos ${this.clientes.length} clientes esperando.`
  }

  constructor() {}

  cambiarCliente(){
    this.nombre = 'Andrea';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Bryam',
    edad: '24',
    direccion: 'Bogotá, Colombia'
  }

  //Json Pipe
  heroes = [{
    nombre: 'SpiderMan',
    poder: 'Trepar muros'
  },{
    nombre: 'Iron Man',
    poder: 'Armadura tecnologica'
  },{
    nombre: 'Thor',
    poder: 'Dios del trueno'
  }];
  
  //Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
 

}
