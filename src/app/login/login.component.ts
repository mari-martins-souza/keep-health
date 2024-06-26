import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  nomeUsuario!: string;
  senha!: string;
  

  constructor(private router: Router, private loginService: LoginService, private navbarService: NavbarService) { }
  
  ngOnInit() {
    setTimeout(() => {
    this.navbarService.toggleNavbar(false);
    });
  }

  ngOnDestroy() {
    this.navbarService.toggleNavbar(true);
  }

  loginButtonClick() {
    this.loginService.logar(this.nomeUsuario, this.senha);

  }

}

