import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

/**
  <blog-menu>
    <div button>button</div>
    <div menu>div</div>
  </blog-menu>
 */
@Component({
  selector: 'blog-menu',
  host: {
    "class": "menu"
  },
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy{
  #menuVisible: boolean = false;
  @Input()
  get menuVisible() {
    return this.#menuVisible;
  }
  set menuVisible(val: boolean) {
    this.#menuVisible = val;
    // TODO fix this
    this.checkForOverflow();
  }

  @Input() corner: string = "BottomLeft";
  @ViewChild("button") button?: ElementRef<HTMLButtonElement>;
  @ViewChild("menuContent") menuContent?: ElementRef<HTMLDivElement>;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    window.addEventListener("scroll", (e) => this.checkForOverflow());
    window.addEventListener("resize", (e) => this.checkForOverflow());
    document.addEventListener("click", (e) => this.outsideClick(e));
  }

  toggle() {
    this.menuVisible = !this.menuVisible;
  }

  outsideClick(e: MouseEvent) {
    const inside = this.elementRef?.nativeElement.contains(<Node>(e.target));

    if (!inside) this.menuVisible = false;
  }

  checkForOverflow() {
    if (!this.menuContent || !this.button) { 
      console.warn("neither 'menuContent' or 'menuButton' is null");
      return;
    }

    const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
    const { x: mX, y: mY, width: mWidth, height: mHeight }
      = this.menuContent.nativeElement.getBoundingClientRect();
    const { x: bX, y: bY, width: bWidth, height: bHeight }
      = this.button.nativeElement.getBoundingClientRect();

    // TOP-BOTTOM
    const bBottom = bY + bHeight;
    const totalTopBottom = bBottom + mHeight;
    
    this.corner = (screenHeight < totalTopBottom) 
                  ? this.corner.replace("Bottom", "Top")
                  : this.corner.replace("Top", "Bottom");
    
    // LFET-RIGHT
    const bRight = bX + bWidth;
    const totalLeftRight = bRight + mWidth;

    this.corner = (screenWidth < totalLeftRight) 
                  ? this.corner.replace("Left", "Right")
                  : this.corner.replace("Right", "Left");
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", (e) => this.checkForOverflow());
    window.removeEventListener("resize", (e) => this.checkForOverflow());
    document.removeEventListener("click", (e) => this.outsideClick(e));
  }
}
