import { Component } from '@angular/core';
import { ConsultarUsuarioService } from '../services/consultar-usuario.service';
import { FormsModule } from '@angular/forms';
import { ResetSenhaService } from '../services/reset-senha.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})
export class EsqueciSenhaComponent {
  email!: string;

    constructor(private ConsultarUsuarioService: ConsultarUsuarioService, private ResetSenhaService: ResetSenhaService) { }

    recuperarSenha() {
      if (this.ConsultarUsuarioService.validarUsuario(this.email)) {
        this.ResetSenhaService.atualizarSenha(this.email, 'a1b2c4d4');
        window.alert("Sua senha foi resetada. Utilize a nova senha: a1b2c4d4")
    } else {
      window.alert("Usuário não encontrado. Informe o e-mail utilizado no cadastro.")
    }
  }
}