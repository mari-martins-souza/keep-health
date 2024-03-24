import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nomeUsuario!: string;
  senha!: string;

  constructor(private router: Router, private loginService: LoginService) { }
  
  logar() {
    if (this.loginService.autenticarUsuario(this.nomeUsuario, this.senha)) {
      this.router.navigate(['/inicio']);
    } else {
      window.alert('Nome de usuário ou senha inválido.')
    }
  }
}
