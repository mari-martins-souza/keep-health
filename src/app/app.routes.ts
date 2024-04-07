import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { PerfilComponent } from './perfil/perfil.component';
import { authGuard } from '../shared/guards/auth.guard';
import { authChildGuard } from '../shared/guards/auth-child.guard';
import { Erro404Component } from './erro404/erro404.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    
    { path: 'cadastro', component: CadastroComponent },  

    { path: 'inicio', component: HomeComponent, canActivate: [authGuard] },

    { path: 'esqueci-senha', component: EsqueciSenhaComponent },

    { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },

    { path: 'dietas',
            canActivateChild: [authChildGuard], 
            loadChildren:
            () => import('../shared/shared.module').then(m => m.SharedModule)
    },

    { path: 'alimento-nao-encontrado', component: Erro404Component }

];

