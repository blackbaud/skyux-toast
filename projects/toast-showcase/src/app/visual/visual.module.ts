import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyDocsToolsModule } from '@skyux/docs-tools';

import { SkyToastModule } from 'projects/toast/src/public-api';

import { ToastVisualComponent } from './toast/toast-visual.component';
import { VisualComponent } from './visual.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToastVisualComponent, VisualComponent],
  imports: [
    CommonModule,
    RouterModule,
    SkyDocsToolsModule,
    SkyToastModule
  ]
})
export class VisualModule { }
