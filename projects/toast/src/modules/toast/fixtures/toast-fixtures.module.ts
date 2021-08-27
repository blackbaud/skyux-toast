import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkyLibResourcesService
} from '@skyux/i18n';

import {
  SkyToastForRootCompatModule
} from '../../shared/toast-for-root-compat-module';

import {
  SkyToastModule
} from '../toast.module';

import {
  SkyToastBodyTestComponent
} from './toast-body.component.fixture';

import {
  SkyToastTestComponent
} from './toast.component.fixture';

import {
  SkyToasterTestComponent
} from './toaster.component.fixture';

import {
  SkyToastWithToasterServiceTestComponent
} from './toast-with-toaster-service.component.fixture';

@NgModule({
  declarations: [
    SkyToastTestComponent,
    SkyToastBodyTestComponent,
    SkyToasterTestComponent,
    SkyToastWithToasterServiceTestComponent
  ],
  imports: [
    CommonModule,
    SkyToastForRootCompatModule,
    SkyToastModule,
    NoopAnimationsModule
  ],
  exports: [
    SkyToastTestComponent,
    SkyToasterTestComponent
  ],
  entryComponents: [
    SkyToastBodyTestComponent
  ],
  providers: [
    SkyLibResourcesService
  ]
})
export class SkyToastFixturesModule { }
