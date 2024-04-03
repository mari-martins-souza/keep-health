import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [ButtonModule, DialogModule, DropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.scss'
})

export class ExerciciosComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  
  }

  novaAtividadeForm = new FormGroup({
    atividade: new FormControl('', Validators.required),
    data:new FormControl('', Validators.required),
    distancia:new FormControl(''),
    duracao:new FormControl(''),
  });


  incluirAtividade() {
    const formAtividade = {
      atividade: this.novaAtividadeForm.value.atividade,
      data: this.novaAtividadeForm.value.data,
      distancia: this.novaAtividadeForm.value.distancia,
      duracao: this.novaAtividadeForm.value.duracao,
    }
      this.salvarAtividadeLocalStorage();
  }

  salvarAtividadeLocalStorage() {
        const atividade = {
          atividade: this.novaAtividadeForm.value.atividade,
          data: this.novaAtividadeForm.value.data,
          distancia: this.novaAtividadeForm.value.distancia,
          duracao: this.novaAtividadeForm.value.duracao,
        };
        localStorage.setItem('atividades', JSON.stringify(atividade));
  }

}





//   @ViewChild('listaExercicios') listaExercicios!: ElementRef;
//   @ViewChild('dataAtividade') dataAtividadeInput!: ElementRef;
//   @ViewChild('distancia') distanciaInput!: ElementRef;
//   @ViewChild('duracao') duracaoInput!: ElementRef;

//   incluirAtividade() {
//     this.modalidade = this.listaExercicios.nativeElement.value;
//     this.dataAtividade = this.dataAtividadeInput.nativeElement.value;
//     this.distancia = this.distanciaInput.nativeElement.valueAsNumber;
//     this.duracao = this.duracaoInput.nativeElement.valueAsNumber;

//     this.salvarAtividadeLocalStorage();
//   }

//   salvarAtividadeLocalStorage() {
//     const atividade = {
//       modalidade: this.modalidade,
//       dataAtividade: this.dataAtividade,
//       distancia: this.distancia,
//       duracao: this.duracao,
//     };

//     localStorage.setItem('atividades', JSON.stringify(atividade));
//   }

//   showDialog() {
//       this.visible = true;
//   }
// }
