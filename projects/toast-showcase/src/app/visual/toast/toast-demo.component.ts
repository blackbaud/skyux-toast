import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SkyToastInstance } from 'projects/toast/src/public-api';

@Component({
  selector: 'app-test-cmp-toast',
  templateUrl: './toast-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDemoComponent {
  constructor(public message: SkyToastInstance) {}
}
