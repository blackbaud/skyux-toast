// #region imports
import {
  AnimationEvent
} from '@angular/animations';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output
} from '@angular/core';

import {
  Subject
} from 'rxjs/Subject';

import {
  skyAnimationEmerge
} from '@skyux/animations';

import {
  SkyToastType
} from './types';

import {
  SkyToasterService
} from './toaster.service';
// #endregion

const AUTO_CLOSE_MILLISECONDS = 6000;

@Component({
  selector: 'sky-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    skyAnimationEmerge
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyToastComponent implements OnInit, OnDestroy {
  @Input()
  public set toastType(value: SkyToastType) {
    this._toastType = value;
  }

  public get toastType(): SkyToastType {
    return (this._toastType === undefined) ? SkyToastType.Info : this._toastType;
  }

  @Input()
  public autoClose: boolean;

  @Output()
  public closed = new EventEmitter<void>();

  public get animationState(): string {
    return (this.isOpen) ? 'open' : 'closed';
  }

  public get ariaLive(): string {
    return (this.toastType === SkyToastType.Danger) ? 'assertive' : 'polite';
  }

  public get ariaRole(): string {
    return (this.toastType === SkyToastType.Danger) ? 'alert' : undefined;
  }

  public get classNames(): string {
    const classNames: string[] = [];

    let typeLabel: string;
    switch (this.toastType) {
      case SkyToastType.Danger:
      typeLabel = 'danger';
      break;

      case SkyToastType.Info:
      default:
      typeLabel = 'info';
      break;

      case SkyToastType.Success:
      typeLabel = 'success';
      break;

      case SkyToastType.Warning:
      typeLabel = 'warning';
      break;
    }

    classNames.push(
      `sky-toast-${typeLabel}`
    );

    return classNames.join(' ');
  }

  private isOpen = false;

  private autoCloseTimeoutId: any;

  private ngUnsubscribe = new Subject<void>();

  private _toastType: SkyToastType;

  constructor(
    private changeDetector: ChangeDetectorRef,
    @Optional() private toasterService?: SkyToasterService
  ) { }

  public ngOnInit(): void {
    this.isOpen = true;

    this.startAutoCloseTimer();

    const actionHandler = (value: boolean) => {
      if (value) {
        this.stopAutoCloseTimer();
      } else {
        this.startAutoCloseTimer();
      }
    };

    if (this.toasterService) {
      this.toasterService.focusIn
      .takeUntil(this.ngUnsubscribe)
      .subscribe(actionHandler);

      this.toasterService.mouseOver
        .takeUntil(this.ngUnsubscribe)
        .subscribe(actionHandler);
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

    this.stopAutoCloseTimer();
  }

  public onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'closed') {
      this.closed.emit();
      this.closed.complete();
    }
  }

  public close(): void {
    this.stopAutoCloseTimer();

    this.isOpen = false;
    this.changeDetector.markForCheck();
  }

  public startAutoCloseTimer() {
    if (this.autoClose &&
      (
        !this.toasterService || (
          !this.toasterService.focusIn.getValue() &&
          !this.toasterService.mouseOver.getValue()
        )
      )
    ) {
      this.stopAutoCloseTimer();

      this.autoCloseTimeoutId = setTimeout(() => {
        this.close();
      }, AUTO_CLOSE_MILLISECONDS);
    }
  }

  public stopAutoCloseTimer() {
    if (this.autoCloseTimeoutId) {
      clearTimeout(this.autoCloseTimeoutId);
    }
  }
}
