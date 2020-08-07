import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkyCodeModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyToastModule
} from './public/public_api';

import {
  ToastDemoComponent
} from './visual/toast/toast-demo.component';

@NgModule({
  imports: [
    SkyToastModule,
    NoopAnimationsModule
  ],
  exports: [
    SkyAppLinkModule,
    SkyCodeModule,
    SkyDocsToolsModule,
    SkyToastModule
  ],
  entryComponents: [
    ToastDemoComponent
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-popovers',
        packageName: '@skyux/toast'
      }
    }
  ]
})
export class AppExtrasModule { }
