import { Component, OnInit } from '@angular/core';
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

export class ExerciciosComponent implements OnInit {
  visible: boolean = false;
  usuarioLogado!: string;

  showDialog() {
    this.visible = true;
  }

  novaAtividadeForm = new FormGroup({
    atividade: new FormControl('', Validators.required),
    data:new FormControl('', Validators.required),
    distancia:new FormControl(''),
    duracao:new FormControl(''),
  });

  ngOnInit() {
    this.usuarioLogado = localStorage.getItem('usuarioLogado') || '';
  }

  incluirAtividade() {
      this.salvarAtividadeLocalStorage();
      this.visible = false;
  }

  salvarAtividadeLocalStorage() {
        let atividades = [];

        const atividadesSalvas = localStorage.getItem('atividadesSalvas-' + this.usuarioLogado);

        if (atividadesSalvas !== null) {
          atividades = JSON.parse(atividadesSalvas);
        }

        const atividade = {
          atividade: this.novaAtividadeForm.value.atividade,
          data: this.novaAtividadeForm.value.data,
          distancia: this.novaAtividadeForm.value.distancia,
          duracao: this.novaAtividadeForm.value.duracao,
        };

        atividades.push(atividade);
        localStorage.setItem('atividadesSalvas-' + this.usuarioLogado, JSON.stringify(atividades));
  }

}




