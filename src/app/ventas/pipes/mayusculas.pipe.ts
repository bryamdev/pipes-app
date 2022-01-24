import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, enMayusculas?: boolean): string {
        console.log('Valor: ' + value);
        console.log('Mayusculas:' + enMayusculas);
        return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();
    }

}