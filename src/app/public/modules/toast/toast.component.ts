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
  Output
} from '@angular/core';

import {
  skyAnimationEmerge
} from '@skyux/animations';

import {
  SkyToastType
} from './types';
// #endregion

const AUTO_CLOSE_MILLISECONDS = 8000;

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

  private hasFocus: boolean;

  private hasMouseOver: boolean;

  private _toastType: SkyToastType;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.isOpen = true;

    this.startAutoCloseTimer();
  }

  public ngOnDestroy(): void {
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
    if (this.autoClose && !this.hasFocus && !this.hasMouseOver) {
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

  public focusin() {
    this.stopAutoCloseTimer();
    this.hasFocus = true;
  }

  public focusout() {
    this.hasFocus = false;
    this.startAutoCloseTimer();
  }

  public mouseenter() {
    this.hasMouseOver = true;
    this.stopAutoCloseTimer();
  }

  public mouseleave() {
    this.hasMouseOver = false;
    this.startAutoCloseTimer();
  }
}
