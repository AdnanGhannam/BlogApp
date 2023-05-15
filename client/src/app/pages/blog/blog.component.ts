import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'blog-blog',
  host: {
    "class": "blog"
  },
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  id: string = "";
  title: string = "";
  content: string = "";

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private blogsService: BlogsService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const id = params["id"];
      this.blogsService.get<any>(id)
        .subscribe({
          next: val => {
            this.id = id;
            this.title = val.data.title;
            this.content = val.data.content;
          },
          error: err => {
            this.id = "";
            this.title = "";
            this.content = "";
            console.warn(err);
          }
        });
    })
  }

  deleteBlog() {
    if (this.id != "") {
      this.blogsService.delete<any>(this.id)
        .subscribe({
          next: val => {
            this.router.navigateByUrl("/");
          },
          error: err => {
            console.warn(err);
          }
        });
    }
  }
}
