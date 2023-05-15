import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-write',
  host: {
    "class": "write",
  },
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent {
  @ViewChild("content") content?: ElementRef<HTMLTextAreaElement>;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngAfterViewInit() {
    this.content?.nativeElement.addEventListener("input", function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 2 +  'px';
    });
  }

  onSubmit({ form }: NgForm) {
    const blog = {
      title: form.value.title,
      content: form.value.content,
      tags: form.value.tags.split(',')
    };

    const token = window.sessionStorage.getItem("jwt");
    const headers = {
      Authorization: `Bearer ${token}`
    };

    this.http.post("http://localhost:5000/post", blog, { headers })
      .subscribe({
        next: (value) => {
          this.router.navigateByUrl("/");
        },
        error: (err) => {
          console.warn(err);
        },
      });
  }
}
