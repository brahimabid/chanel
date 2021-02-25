import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OportuniteRoutingModule } from './oportunite-routing.module';
import { OportuniteComponent } from './oportunite.component';


@NgModule({
  declarations: [OportuniteComponent],
  imports: [
    CommonModule,
    OportuniteRoutingModule
  ]
})
export class OportuniteModule { }
