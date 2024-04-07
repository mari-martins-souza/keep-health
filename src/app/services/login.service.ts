import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged: boolean = false;
  nomeUsuario!: string;
  senha!: string;

  constructor(private router: Router) { }

  getUsuarios() {
    const usuariosSalvos = localStorage.getItem('usuariosSalvos');
    return usuariosSalvos !== null ? JSON.parse(usuariosSalvos) : [];
  }

  autenticarUsuario(nomeUsuario: string, senha: string) {
    const usuarios = this.getUsuarios();
    return usuarios.some((usuario: { nomeUsuario: string; senha: string; }) => usuario.nomeUsuario === nomeUsuario && usuario.senha === senha);

  }


  logar(nomeUsuario: string, senha: string) {
    if (this.autenticarUsuario(nomeUsuario, senha)) {
      localStorage.setItem('usuarioLogado', nomeUsuario);
      this.router.navigate(['/inicio']);
      localStorage.setItem('isLogged', 'true');
      this.isLogged = true;
    } else {
      window.alert('Senha ou nome de usuário inválidos.')
    }

  }

}
