import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetSenhaService {

  constructor() { }

  getUsuarios() {
    const usuariosSalvos = localStorage.getItem('usuariosSalvos');
    return usuariosSalvos !== null ? JSON.parse(usuariosSalvos) : [];
  }

  atualizarSenha(email: string, novaSenha: string) {
    let usuarios = this.getUsuarios();
    for (let usuario of usuarios) {
      if (usuario.email === email) {
        usuario.senha = novaSenha;
        break;
      }
    }
    localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios))
  }
}
