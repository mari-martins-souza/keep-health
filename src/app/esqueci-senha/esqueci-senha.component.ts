import { Component, OnInit } from '@angular/core';
import { ConsultarUsuarioService } from '../services/consultar-usuario.service';
import { FormsModule } from '@angular/forms';
import { ResetSenhaService } from '../services/reset-senha.service';
import { RouterModule, Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.scss'
})
export class EsqueciSenhaComponent implements OnInit {
  email!: string;

    constructor(private ConsultarUsuarioService: ConsultarUsuarioService, private ResetSenhaService: ResetSenhaService, private router: Router, private navbarService: NavbarService) { }

    ngOnInit() {
      setTimeout(() => {
      this.navbarService.toggleNavbar(false);
      });
    }
  
    ngOnDestroy() {
      this.navbarService.toggleNavbar(true);
    }

    recuperarSenha() {
      if (this.ConsultarUsuarioService.validarUsuario(this.email)) {
        this.ResetSenhaService.atualizarSenha(this.email, 'a1b2c4d4');
        window.alert("Sua senha foi resetada. Utilize a nova senha: a1b2c4d4");
        this.router.navigate(['/login']);
    } else {
      window.alert("Usuário não encontrado. Informe o e-mail utilizado no cadastro.")
    }
  }
}