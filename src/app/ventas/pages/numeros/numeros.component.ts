import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent{

  ventasNetas: number = 2567987.4128;
  porcentaje: number = 0.11245;

  constructor() { }

}
