import { Component, Input } from '@angular/core';

@Component({
  selector: '.blog-button',
  host: {
    "[class.styled]": "styled"
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() styled: boolean = false;
}
