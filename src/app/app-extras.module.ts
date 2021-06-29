import {
  NgModule
} from '@angular/core';

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
  SkyToastForRootCompatModule
} from './public/modules/shared/toast-for-root-compat-module';

import {
  SkyToastModule
} from './public/public_api';

import {
  ToastDemoComponent
} from './visual/toast/toast-demo.component';

@NgModule({
  imports: [
    SkyToastForRootCompatModule
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
        gitRepoUrl: 'https://github.com/blackbaud/skyux-toast',
        packageName: '@skyux/toast'
      }
    }
  ]
})
export class AppExtrasModule { }
