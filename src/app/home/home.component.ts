import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExerciciosComponent } from '../exercicios/exercicios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ExerciciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 

  constructor() {}
  
  
  }


