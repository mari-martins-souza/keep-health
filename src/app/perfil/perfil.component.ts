import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConversorAlturaPipe } from '../pipes/conversor-altura.pipe';
import { ConversorIdadePipe } from '../pipes/conversor-idade.pipe';
import { EnderecoService } from '../services/endereco.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ConversorAlturaPipe, ConversorIdadePipe, HttpClientModule],
  providers: [EnderecoService],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})

export class PerfilComponent implements OnInit {
  usuarioLogado: any;
  enderecoRetornado: any;

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit(): void {
    const nomeUsuario = localStorage.getItem('usuarioLogado');
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuariosSalvos') || '[]');

    this.usuarioLogado = usuariosSalvos.find((usuario: any) => usuario.nomeUsuario === nomeUsuario);

  }
  
  pesquisarCep() {
    const cep = this.usuarioLogado.localizacao;
       
      this.enderecoService.getCep(cep).subscribe(endereco => {
        this.enderecoRetornado = 
        `${endereco.logradouro}, 
        ${endereco.bairro}, 
        ${endereco.localidade} - 
        ${endereco.uf}`;
      });
    };
  }
