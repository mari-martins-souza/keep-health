import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dietas',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './dietas.component.html',
  styleUrl: './dietas.component.scss'
})
export class DietasComponent implements OnInit {
  textoPesquisa: string | undefined;

  pesquisar() {
    let textoPesquisa = this.textoPesquisa || '';
    this.alimentosFiltro = this.alimentos.filter(item => item.name.toLowerCase().includes(textoPesquisa.toLowerCase()));
  }

    alimentos = [
    {
      id: 1,
      name: 'Couve-flor',
      description: 'Rica em fibras que controlam a fome ao longo do dia, diminuindo a ingestão de alimentos.',
      qttCalories: 25,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/couve-flor.jpg',
    },
    {
      id: 2,
      name: 'Chá verde',
      description: 'Possui compostos bioativos, como cafeína, catequinas e flavonoides, que aceleram o metabolismo, fazendo com que o organismo gaste mais energia.',
      qttCalories: 1, 
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/cha-verde.jpg',
    },
    {
      id: 3,
      name: 'Arroz integral',
      description: 'Rico em fibras, ajudando a aumentar a saciedade e fazendo com que a quantidade de alimentos ingeridos seja menor.',
      qttCalories: 112,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/arroz-integral.jpg',
    },
    {
      id: 4,
      name: 'Batata Konjac',
      description: 'Contém fibras solúveis que formam um tipo de gel no estômago, que aumentam o tempo de digestão dos alimentos, diminuindo a fome entre as refeições.',
      qttCalories: 9, 
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/batata-konjac.jpg',
    },
    {
      id: 5,
      name: 'Azeite',
      description: 'Rico em gorduras poli-insaturadas, que reduzem a dor provocada pela fome.',
      qttCalories: 884,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/azeite.jpg',
    },
    {
      id: 6,
      name: 'Folhas Verdes',
      description: 'Possuem uma carga de calorias extremamente baixas, mas fornecem uma grande quantidade de fibras, que provocam sensação de saciedade.',
      qttCalories: 20, 
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/folhas-verdes.jpg',
    },
    {
      id: 7,
      name: 'Aveia',
      description: 'Fornece ao corpo uma dose de energia de consumo lento, de modo a diminuir a fome ao longo do dia todo.',
      qttCalories: 389,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/aveia.jpg',
    },
    {
      id: 8,
      name: 'Feijão',
      description: 'Contém boas doses de proteínas e fibras, possuindo poucas calorias e fornecendo energia de consumo lento.',
      qttCalories: 108, 
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/feijao.jpg',
    },
    {
      id: 9,
      name: 'Vinagre de Maçã',
      description: 'Mata bactérias hostis ao organismo, garantindo um trato digestivo saudável.',
      qttCalories: 25,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/vinagre-maca.jpg',
    },
    {
      id: 10,
      name: 'Maçã',
      description: 'Rica em fibras, fornece saciedade não só pela sua composição, mas pelo trabalhoso ato de mastigá-la.',
      qttCalories: 52,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/maca.jpg',
    },
    {
      id: 11,
      name: 'Canela',
      description: 'A canela possui propriedades anti-inflamatórias, antioxidantes e antimicrobianas. Ajuda a reduzir os níveis de açúcar no sangue e tem um efeito termogênico.',
      qttCalories: 261,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/canela.jpg',
    },
    {
      id: 12,
      name: 'Berinjela',
      description: 'A berinjela é um alimento de baixa caloria. Rica em água e fibras, o que ajuda a aumentar a sensação de saciedade e reduzir a ingestão geral de calorias.',
      qttCalories: 25,
      qttDaysFeed: 7,
      imageLink: 'assets/imagens/berinjela.jpg',
    }

  ];

  alimentosFiltro = this.alimentos;

  limparFiltro() {
    this.alimentosFiltro = this.alimentos;
  }

  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('alimentos', JSON.stringify(this.alimentos));
  }
}
