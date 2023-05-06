import { Component, HostBinding, Input } from '@angular/core';
import { User } from 'src/app/types';
import { Avatar } from 'src/app/ui-components/avatar/avatar.component';

@Component({
  selector: 'blog-side',
  host: {
    "class": "side"
  },
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  @Input() title?: string | null = null;
  @HostBinding('attr.title') get getTitle() {
    return null;
  }

  // TODO remove all
  writers: User[] = [
    {
      name: "adnan",
      img: "assets/images/user-test.bmp",
      bio: "Entrepreneur | 600+ Tech Articles | Subscribe to upcoming Videos"
    },
    {
      name: "adnan",
      img: "assets/images/user-test.bmp",
      bio: "Entrepreneur | 600+ Tech Articles | Subscribe to upcoming Videos"
    },
    {
      name: "adnan",
      img: "assets/images/user-test.bmp",
      bio: "Entrepreneur | 600+ Tech Articles | Subscribe to upcoming Videos"
    },
    {
      name: "adnan",
      img: "assets/images/user-test.bmp",
      bio: "Entrepreneur | 600+ Tech Articles | Subscribe to upcoming Videos"
    },
    {
      name: "adnan",
      img: "assets/images/user-test.bmp",
      bio: "Entrepreneur | 600+ Tech Articles | Subscribe to upcoming Videos"
    },
    {
      name: "adnan",
      img: "assets/images/user-test.bmp",
      bio: "Entrepreneur | 600+ Tech Articles | Subscribe to upcoming Videos"
    },
  ];

  avatars: Avatar[] = [
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
    { img: "assets/images/user-test.bmp", name: "Adnan" },
  ];

  tags: [string, string][] = [
    ['Javascript', ''], 
    ['Programming', ''],
    ['Typescript', ''],
    ['Software Enginering', '']
  ];
}
