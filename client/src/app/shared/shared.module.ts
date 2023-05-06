import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { WriterComponent } from './writer/writer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AvatarsListComponent,
    LogoComponent,
    NavbarComponent,
    PageComponent,
    WriterComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    AppRoutingModule
  ],
  exports: [
    AvatarsListComponent,
    LogoComponent,
    NavbarComponent,
    PageComponent,
    WriterComponent
  ],
})
export class SharedModule { }
