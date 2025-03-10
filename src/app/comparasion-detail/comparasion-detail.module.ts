import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComparasionDetailPage } from './comparasion-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ComparasionDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComparasionDetailPage]
})
export class ComparasionDetailPageModule {}
