import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsListComponent } from './avatars-list.component';

describe('AvatarsListComponent', () => {
  let component: AvatarsListComponent;
  let fixture: ComponentFixture<AvatarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
