import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.scss']
})
export class LinkComponent {
  @Input()
  values: string[] = [];
  @Input()
  disabled: boolean = false;
  @Input()
  hideCloseIcon: boolean = false;
}
