import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [ButtonModule, DialogModule, DropdownModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.scss'
})

export class ExerciciosComponent implements OnInit {
  visible: boolean = false;
  usuarioLogado!: string;
  listaAtividades: any = [];

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

    const atividadesSalvasDoUsuarioLogado = localStorage.getItem('atividadesSalvas-' + this.usuarioLogado);

    if(atividadesSalvasDoUsuarioLogado !== null) {
    this.listaAtividades = JSON.parse(atividadesSalvasDoUsuarioLogado);
  }
}

  incluirAtividade() {
    if(this.novaAtividadeForm.valid) {
      this.salvarAtividadeLocalStorage();
      this.visible = false;
      this.ngOnInit()
    } else {
      alert("Preencha pelo menos a modalidade e a data para incluir a atividade.")
    }
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

  removerAtividade(index: number) {
    this.listaAtividades.splice(index, 1);
    localStorage.setItem("atividadesSalvas-" + this.usuarioLogado, JSON.stringify(this.listaAtividades));
  }

}




