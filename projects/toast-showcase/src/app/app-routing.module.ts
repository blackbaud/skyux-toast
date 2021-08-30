import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToastVisualComponent } from './visual/toast/toast-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: 'visual',
    component: VisualComponent
  },
  {
    path: 'visual/toast',
    component: ToastVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
