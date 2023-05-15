import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

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
  @ViewChild("img") img?: ElementRef<HTMLImageElement>;

  @HostBinding("style.backgroundColor") get getBackgroundColor() {
    return this.avatar.img ? "transparent" : "var(--bg-avatar)";
  } 
  @HostBinding('attr.name') get getName() {
    return null;
  }
  @HostBinding('attr.title') get getTitle() {
    return this.avatar.name;
  }

  ngAfterViewInit() {
    this.img?.nativeElement.addEventListener("error", function() {
      this.src = "";
    })
  }
}
