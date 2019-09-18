import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlatmatePreferencePage } from './flatmate-preference.page';

const routes: Routes = [
  {
    path: '',
    component: FlatmatePreferencePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlatmatePreferencePage]
})
export class FlatmatePreferencePageModule {}
