import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
   <blog-taps [taps]="taps"></blog-taps>
 */
@Component({
  selector: 'blog-taps',
  host: {
    "class": "taps",
  },
  templateUrl: './taps.component.html',
  styleUrls: ['./taps.component.scss']
})
export class TapsComponent {
  @Input() taps: string[] = [];
  active: number = 0;

  @Output() onChange = new EventEmitter<number>();
  _onChange(index: number) {
    this.active = index;
    this.onChange.emit(index);
  }
}
