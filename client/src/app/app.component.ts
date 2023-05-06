import { Component } from '@angular/core';
import { Chip } from './ui-components/chips/chips.component';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  chips: Chip[] = [
    ["Javascript", "/"],
    ["Typescript", "/"],
    ["Angular", "/"],
    ["VueJS", "/"],
    ["NodeJS", "/"],
    ["ExpressJS", "/"],
    ["HTML", "/"],
    ["SCSS", "/"],
  ];

}
