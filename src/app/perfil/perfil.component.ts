import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  usuarioLogado: any;

  constructor() {}

  ngOnInit(): void {
    const nomeUsuario = localStorage.getItem('usuarioLogado');
    const usuariosSalvos = JSON.parse(localStorage.getItem('UsuariosSalvos') || '[]');

    this.usuarioLogado = usuariosSalvos.find((usuario: any) => usuario.nomeUsuario === nomeUsuario);
    
    console.log(usuariosSalvos);
  }
}

