import { Component, Input } from '@angular/core';
import { User } from 'src/app/types';
import { Chip } from 'src/app/ui-components/chips/chips.component';

@Component({
  selector: 'blog-card[user][blogTitle][content]',
  host: {
    "class": "card"
  },
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() toLink?: string;
  @Input() user!: User;
  @Input() day?: number;
  @Input() blogTitle!: string;
  @Input() content!: string;
  @Input() tags: Chip[] = [];
  @Input() readingTime?: number;
}
