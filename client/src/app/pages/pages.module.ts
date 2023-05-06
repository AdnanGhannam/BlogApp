import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { SharedModule } from '../shared/shared.module';
import { SideComponent } from './home/side/side.component';
import { CardComponent } from './home/card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SideComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    CardComponent,
    SideComponent
  ],
})
export class PagesModule { }
