import { Component, Input } from '@angular/core';

export type Chip = {
  id: string;
  name: string;
}

/**
  <blog-chips [chips]="chips"></blog-chips>
 */
@Component({
  selector: 'blog-chips',
  host: {
    "class": "chips",
  },
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  @Input() chips: Chip[] = [];
}
