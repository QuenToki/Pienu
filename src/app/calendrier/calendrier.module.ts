import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendrierPageRoutingModule } from './calendrier-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendrierPage } from './calendrier.page';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@NgModule({
  imports: [
    NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalendrierPageRoutingModule
  ],
  declarations: [CalendrierPage]
})
export class CalendrierPageModule {}
