import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cadastroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('', Validators.required),
    senha: new FormControl('',Validators.required),
    confirmarSenha: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required),
    altura: new FormControl('', Validators.required),
    localizacao: new FormControl('', Validators.required),
    nomeUsuario: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
    setTimeout(() => {
    this.navbarService.toggleNavbar(false);
    });
  }

  ngOnDestroy() {
    this.navbarService.toggleNavbar(true);
  }

  cadastrar() {
    if (this.cadastroForm.valid) {
      if (this.cadastroForm.value.senha === this.cadastroForm.value.confirmarSenha) {
        let usuarios = [];
        const usuariosSalvos = localStorage.getItem('usuariosSalvos');
        if (usuariosSalvos !== null) {
          usuarios = JSON.parse(usuariosSalvos);
        }
        const usuario = {
          nome: this.cadastroForm.value.nome,
          email: this.cadastroForm.value.email,
          dataNascimento: this.cadastroForm.value.dataNascimento,
          senha: this.cadastroForm.value.senha,
          peso: this.cadastroForm.value.peso,
          altura: this.cadastroForm.value.altura,
          localizacao: this.cadastroForm.value.localizacao,
          nomeUsuario: this.cadastroForm.value.nomeUsuario,
          
        }
        usuarios.push(usuario);
        localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios));
        window.alert('Cadastro efetuado com sucesso. Você já pode efetuar login.')
        this.router.navigate(['']);
        
      } else {
        window.alert('As senhas não são iguais. Tente novamente.')
      }
    } else {
      window.alert('Preencha todos os campos corretamente.')
    }
  }
}  