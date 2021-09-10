import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';

import { SkyToastModule } from 'projects/toast/src/public-api';

import { ToastVisualComponent } from './toast/toast-visual.component';
import { VisualComponent } from './visual.component';

@NgModule({
  declarations: [ToastVisualComponent, VisualComponent],
  imports: [
    CommonModule,
    RouterModule,
    SkyE2eThemeSelectorModule,
    SkyToastModule
  ]
})
export class VisualModule { }
