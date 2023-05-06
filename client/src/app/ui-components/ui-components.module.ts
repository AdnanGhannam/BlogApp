import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { LinkComponent } from './link/link.component';
import { ChipsComponent } from './chips/chips.component';
import { TapsComponent } from './taps/taps.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [
    MenuComponent,
    ButtonComponent,
    InputboxComponent,
    LinkComponent,
    ChipsComponent,
    TapsComponent,
    TooltipComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    ButtonComponent,
    InputboxComponent,
    LinkComponent,
    ChipsComponent,
    TapsComponent,
    TooltipComponent,
    AvatarComponent
  ]
})
export class UiComponentsModule { }
