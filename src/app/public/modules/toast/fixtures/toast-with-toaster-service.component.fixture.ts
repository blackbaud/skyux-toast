// #region imports
import {
  Component,
  ViewChild
} from '@angular/core';

import {
  SkyToastType
} from '../types/toast-type';

import {
  SkyToastComponent
} from '../toast.component';

import {
  SkyToasterService
} from '../toaster.service';
// #endregion

@Component({
  selector: 'sky-test-cmp',
  templateUrl: './toast.component.fixture.html',
  providers: [SkyToasterService]
})
export class SkyToastWithToasterServiceTestComponent {
  public autoClose: boolean;

  public toastType: SkyToastType;

  @ViewChild(SkyToastComponent)
  public toastComponent: SkyToastComponent;

  constructor(public toasterService: SkyToasterService) { }

  public onClosed(): void { }
}
