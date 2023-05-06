import { Component, Input } from '@angular/core';
import { User } from 'src/app/types';

@Component({
  selector: 'blog-writer[writer]',
  host: {
    "class": "writer"
  },
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent {
  @Input() writer!: User;
}
