import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('', Validators.required),
    senha: new FormControl('',Validators.required),
    confirmarSenha: new FormControl('', Validators.required),
  });

  cadastrar() {
    if (this.cadastroForm.value.senha === this.cadastroForm.value.confirmarSenha) {
      const usuario = {
        email: this.cadastroForm.value.email,
        senha: this.cadastroForm.value.senha
      }

      let usuarios = [];
      const usuariosSalvos = localStorage.getItem('usuariosSalvos');
      if (usuariosSalvos !== null) {
        usuarios = JSON.parse(usuariosSalvos);
      }

      usuarios.push(usuario);
      
      localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios));
    }
  }
}

