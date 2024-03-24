import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosUsuarioService {

  constructor() { }

  getUsuarios() {
    const usuariosSalvos = localStorage.getItem('usuariosSalvos');
    return usuariosSalvos !== null ? JSON.parse(usuariosSalvos) : [];
  }

  
}
