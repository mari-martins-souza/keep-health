import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authChildGuard } from './guards/auth-child.guard';
import { DietasComponent } from '../app/dietas/dietas.component';
import { DietasDetalhesComponent } from '../app/dietas/dietas-detalhes/dietas-detalhes.component';

const routes: Routes = [
            { path: '', component: DietasComponent }, 
            { path: 'detalhes/:id', component: DietasDetalhesComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SharedModule { }
