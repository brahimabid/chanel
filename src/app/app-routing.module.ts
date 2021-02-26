import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './allcmp/accueil/accueil.component';

const routes: Routes = [
{path:'Accueil',component:AccueilComponent},

  { path: 'Opportunités', loadChildren: () => import('./oportunite/oportunite/oportunite.module').then(m => m.OportuniteModule) }

,{path:'',redirectTo:'Accueil',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
