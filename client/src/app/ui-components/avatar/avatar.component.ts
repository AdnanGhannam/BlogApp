import { Component, HostBinding, Input } from '@angular/core';

export type Avatar = {
  img?: string | null;
  name: string;
};

@Component({
  selector: 'blog-avatar[avatar]',
  host: {
    "class": "avatar",
  },
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() avatar!: Avatar;

  @HostBinding("style.backgroundColor") get getBackgroundColor() {
    return this.avatar.img ? "transparent" : "var(--bg-avatar)";
  } 
  @HostBinding('attr.name') get getName() {
    return null;
  }
  @HostBinding('attr.title') get getTitle() {
    return this.avatar.name;
  }
}
