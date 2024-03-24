import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nomeUsuario: string = '';

  constructor() {}
  
  ngOnInit() {
    this.nomeUsuario = localStorage.getItem('usuarioLogado') || '';
  }

}
