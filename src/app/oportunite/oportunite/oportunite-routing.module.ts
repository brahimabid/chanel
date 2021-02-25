import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OportuniteComponent } from './oportunite.component';

const routes: Routes = [{ path: '', component: OportuniteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OportuniteRoutingModule { }
