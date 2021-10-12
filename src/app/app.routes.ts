import { FerramentasComponent } from './views/ferramentas/ferramentas.component';
import { TarefasComponent } from './views/tarefas/tarefas.component';
import { SitesComponent } from './views/sites/sites.component';
import { RepositorioComponent } from './views/repositorio/repositorio.component';
import { Routes } from '@angular/router';
import { AuthGuardEcm } from '@alfresco/adf-core';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { FileViewComponent } from './components/file-view/file-view.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'files/:nodeId/view', component: FileViewComponent, canActivate: [AuthGuardEcm], outlet: 'overlay' },
  {
    path: 'ecm',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardEcm]
      },
      {
        path: 'documents',
        component: DocumentsComponent,
        canActivate: [AuthGuardEcm]
      },
      {
        path: 'sites',
        component: SitesComponent,
        canActivate: [AuthGuardEcm]
      },
      {
        path: 'tasks',
        component: TarefasComponent,
        canActivate: [AuthGuardEcm]
      },
      {
        path:'repositories',
        component:RepositorioComponent,
        canActivate: [AuthGuardEcm]
      },
      {
        path: 'tools',
        component: FerramentasComponent,
        canActivate:[AuthGuardEcm]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
