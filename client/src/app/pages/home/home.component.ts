import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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

  @HostBinding("attr.title") get getTitle() {
    return null;
  }

  @ViewChild("titleTapsRef") titleTapsRef?: TapsComponent;
  @ViewChild("tapsRef") tapsRef?: TapsComponent;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramMap$ = this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get("topic")?.replaceAll("-", " ");
    });
  }

  ngAfterViewInit() {
    // TODO 
    this.titleTaps$ = this.titleTapsRef?.onChange.subscribe();
    this.taps$ = this.tapsRef?.onChange.subscribe();
  }

  ngOnDestroy(): void {
    this.paramMap$?.unsubscribe();
    this.titleTaps$?.unsubscribe();
    this.taps$?.unsubscribe();
  }
}
