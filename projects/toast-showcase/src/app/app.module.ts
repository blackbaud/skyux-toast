import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SkyThemeService } from '@skyux/theme';

import { VisualModule } from './visual/visual.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NoopAnimationsModule,
    AppRoutingModule,
    VisualModule
  ],
  providers: [SkyThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
