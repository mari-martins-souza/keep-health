import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
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
    if (this.cadastroForm.valid) {
      if (this.cadastroForm.value.senha === this.cadastroForm.value.confirmarSenha) {
        let usuarios = [];
        const usuariosSalvos = localStorage.getItem('usuariosSalvos');
        if (usuariosSalvos !== null) {
          usuarios = JSON.parse(usuariosSalvos);
        }
        const usuario = {
          email: this.cadastroForm.value.email,
          senha: this.cadastroForm.value.senha
        }
        usuarios.push(usuario);
        localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios));
      } else {
        window.alert('As senhas não são iguais. Tente novamente.')
      }
    } else {
      window.alert('Preencha todos os campos corretamente.')
    }
  }
}  