import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  SkyToastInstance
} from '../../public';

@Component({
  selector: 'sky-test-cmp-toast',
  templateUrl: './toast-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastDemoComponent {
  constructor(
    public message: SkyToastInstance
  ) { }
}
