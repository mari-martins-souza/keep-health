import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dietas-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dietas-detalhes.component.html',
  styleUrl: './dietas-detalhes.component.scss'
})
export class DietasDetalhesComponent implements OnInit {
  id: number | undefined;
  alimento: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const alimentosString = localStorage.getItem('alimentos');
    if (alimentosString !== null) {
      const alimentos = JSON.parse(alimentosString);
      this.alimento = alimentos.find((alimento: { id: number; }) => alimento.id === this.id);
    }
  }
}


