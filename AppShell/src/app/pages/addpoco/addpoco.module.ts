import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpocoPageRoutingModule } from './addpoco-routing.module';

import { AddpocoPage } from './addpoco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpocoPageRoutingModule
  ],
  declarations: [AddpocoPage]
})
export class AddpocoPageModule {}
