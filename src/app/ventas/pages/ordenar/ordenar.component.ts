import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      color: Color.azul,
      vuela: true
    },{
      nombre: 'Batman',
      color: Color.negro,
      vuela: false
    },
    {
      nombre: 'Spiderman',
      color: Color.rojo,
      vuela: false
    },
    {
      nombre: 'Iron Man',
      color: Color.rojo,
      vuela: true
    },
    {
      nombre: 'Linterna Verde',
      color: Color.verde,
      vuela: true
    }
  ];

  alternarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(orden: string){
    this.ordenarPor = orden;
  }


}
