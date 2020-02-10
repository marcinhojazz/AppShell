import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeupocoPageRoutingModule } from './meupoco-routing.module';

import { MeupocoPage } from './meupoco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeupocoPageRoutingModule
  ],
  declarations: [MeupocoPage]
})
export class MeupocoPageModule {}
