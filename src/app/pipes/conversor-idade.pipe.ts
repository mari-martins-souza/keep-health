import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorIdade',
  standalone: true
})
export class ConversorIdadePipe implements PipeTransform {
  
  transform(value: string): number {
    const hoje = new Date();
    const nascimento = new Date(value);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    
    return idade;
  }

}
