import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { DietasComponent } from './dietas/dietas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietasDetalhesComponent } from './dietas/dietas-detalhes/dietas-detalhes.component';
import { authGuard } from '../shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    
    {   
        path: 'cadastro',
        component: CadastroComponent
    },  
    {
        path: 'inicio',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'esqueci-senha',
        component: EsqueciSenhaComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'dietas', 
            children: [
            { 
                path: '', component: DietasComponent, canActivate: [authGuard] 
            },
            { 
                path: 'detalhes/:id', component: DietasDetalhesComponent, canActivate: [authGuard] 
            },
            ] 
    },

];

