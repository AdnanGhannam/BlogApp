import { Component, Input } from '@angular/core';
import { Avatar } from 'src/app/ui-components/avatar/avatar.component';

@Component({
  selector: 'blog-avatars-list',
  host: {
    "class": "avatars-list"
  },
  templateUrl: './avatars-list.component.html',
  styleUrls: ['./avatars-list.component.scss']
})
export class AvatarsListComponent {
  @Input() avatars: Avatar[] = [];
}
