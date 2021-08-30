import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SkyThemeService } from '@skyux/theme';

import { VisualModule } from './visual/visual.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    VisualModule
  ],
  providers: [SkyThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
