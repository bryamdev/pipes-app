import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'bryam';
  nombreUpper: string = 'BRYAM';
  nombreCompleto: string = 'bryAm castañeDa';

  fecha: Date = new Date();

  constructor() { }

}
