import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-navbar',
  host: {
    "class": "navbar",
  },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  toWritePage() {
    this.router.navigateByUrl("/write");
  }
}
