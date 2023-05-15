import { Component } from '@angular/core';

@Component({
  selector: 'blog-sign',
  host: {
    "class": "sign"
  },
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  title: string = "";
  subTitle: string = "";
}
