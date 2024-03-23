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

  autenticarUsuario(email: string, senha: string) {
    const usuarios = this.getUsuarios();
    return usuarios.some((usuario: { email: string; senha: string; }) => usuario.email === email && usuario.senha === senha)
  }
}
