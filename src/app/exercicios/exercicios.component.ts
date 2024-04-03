import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [ButtonModule, DialogModule, DropdownModule, FormsModule],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.scss'
})

export class ExerciciosComponent {
  visible: boolean = false;
  modalidade!: string;
  dataAtividade!: string;
  distancia!: number;
  duracao!: number;

  @ViewChild('listaExercicios') listaExercicios!: ElementRef;
  @ViewChild('dataAtividade') dataAtividadeInput!: ElementRef;
  @ViewChild('distancia') distanciaInput!: ElementRef;
  @ViewChild('duracao') duracaoInput!: ElementRef;

  incluirAtividade() {
    this.modalidade = this.listaExercicios.nativeElement.value;
    this.dataAtividade = this.dataAtividadeInput.nativeElement.value;
    this.distancia = this.distanciaInput.nativeElement.valueAsNumber;
    this.duracao = this.duracaoInput.nativeElement.valueAsNumber;

    this.salvarAtividadeLocalStorage();
  }

  salvarAtividadeLocalStorage() {
    const atividade = {
      modalidade: this.modalidade,
      dataAtividade: this.dataAtividade,
      distancia: this.distancia,
      duracao: this.duracao,
    };

    localStorage.setItem('atividades', JSON.stringify(atividade));
  }

  showDialog() {
      this.visible = true;
  }
}
