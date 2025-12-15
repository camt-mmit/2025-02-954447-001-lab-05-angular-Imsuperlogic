import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.html',
  styleUrl: './status.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Status {
  currentDate: string = new Date().toString();
  userAgent: string = navigator.userAgent;
  languages: string = navigator.languages.join(',');
  cookieEnabled: boolean = navigator.cookieEnabled;
  logicalProcessors: number = navigator.hardwareConcurrency;
  maxTouchPoints: number = navigator.maxTouchPoints;
}
