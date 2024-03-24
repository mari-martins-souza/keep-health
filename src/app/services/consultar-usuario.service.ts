import { Injectable } from '@angular/core';

interface Usuario {
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class ConsultarUsuarioService {

  constructor () { }

  getUsuarios() {
    const usuariosSalvos = localStorage.getItem('usuariosSalvos');
    return usuariosSalvos !== null ? JSON.parse(usuariosSalvos) : [];
  }

  validarUsuario(email: string) {
    const usuarios = this.getUsuarios();
    return usuarios.some((usuario: Usuario) => usuario.email === email);
  }
}
