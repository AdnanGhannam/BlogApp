import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { SharedModule } from '../shared/shared.module';
import { SideComponent } from './home/side/side.component';
import { CardComponent } from './home/card/card.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { WriteComponent } from './write/write.component';
import { BlogComponent } from './blog/blog.component';
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    SideComponent,
    WriteComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    HomeComponent,
    CardComponent,
    SideComponent,
    WriteComponent,
    BlogComponent,
  ],
})
export class PagesModule { }
