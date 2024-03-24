import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorAltura',
  standalone: true
})
export class ConversorAlturaPipe implements PipeTransform {

  transform(value: number): number {
    return value / 100;
  }

}
