import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BlogsService } from 'src/app/services/blogs.service';
import { TapsComponent } from 'src/app/ui-components/taps/taps.component';

@Component({
  selector: 'blog-home',
  host: {
    "class": "home"
  },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title?: string | null = null;
  paramMap$?: Subscription;
  titleTaps$?: Subscription;
  taps$?: Subscription;
  titleTaps = ["Trending", "Latest", "Best"];
  taps = ["For you", "Following"];
  blogs$?: Subscription;
  blogs: Array<any> = [];

  @HostBinding("attr.title") get getTitle() {
    return null;
  }

  @ViewChild("titleTapsRef") titleTapsRef?: TapsComponent;
  @ViewChild("tapsRef") tapsRef?: TapsComponent;

  constructor(private activatedRoute: ActivatedRoute,
              private blogsServices: BlogsService) {}

  ngOnInit(): void {
    this.paramMap$ = this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get("topic")?.replaceAll("-", " ");
    });

    this.blogs$ = this.blogsServices.getAll<any>().subscribe(blogs => {
      this.blogs = blogs.data;
      console.log(this.blogs)
    });
  }

  ngAfterViewInit() {
    // TODO 
    this.titleTaps$ = this.titleTapsRef?.onChange.subscribe();
    this.taps$ = this.tapsRef?.onChange.subscribe();
  }

  calcDays(day: number) {
    const now = Date.now();
    const daysSinceCreation = (now - day) / (1000 * 60 * 60 * 24);

    return Math.floor(daysSinceCreation);
  }

  ngOnDestroy(): void {
    this.paramMap$?.unsubscribe();
    this.titleTaps$?.unsubscribe();
    this.taps$?.unsubscribe();
    this.blogs$?.unsubscribe();
  }
}
