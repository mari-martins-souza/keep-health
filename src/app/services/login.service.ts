import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUsuarios() {
    const usuariosSalvos = localStorage.getItem('usuariosSalvos');
    return usuariosSalvos !== null ? JSON.parse(usuariosSalvos) : [];
  }

  autenticarUsuario(nomeUsuario: string, senha: string) {
    const usuarios = this.getUsuarios();
    return usuarios.some((usuario: { nomeUsuario: string; senha: string; }) => usuario.nomeUsuario === nomeUsuario && usuario.senha === senha)
  }
}
