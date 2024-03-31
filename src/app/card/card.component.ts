import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() item: any;

  constructor(private router: Router) { }

  redirecionarParaDetalhes(id: number) {
    this.router.navigate(['/dietas/detalhes', id]);
  }
}
