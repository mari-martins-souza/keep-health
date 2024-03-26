import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { DietasComponent } from './dietas/dietas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietasDetalheComponent } from './dietas-detalhe/dietas-detalhe.component';



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
        component: HomeComponent
    },
    {
        path: 'esqueci-senha',
        component: EsqueciSenhaComponent
    },
    {
        path: 'dietas',
        component: DietasComponent,
        children: [
            {
                path: 'detalhe',
                component: DietasDetalheComponent
            }
        ]
    },
    {
        path: 'perfil',
        component: PerfilComponent
    }
];

