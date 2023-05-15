import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { WriterComponent } from './writer/writer.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './sign/login/login.component';
import { SignupComponent } from './sign/signup/signup.component';



@NgModule({
  declarations: [
    AvatarsListComponent,
    LogoComponent,
    NavbarComponent,
    PageComponent,
    WriterComponent,
    SignComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AvatarsListComponent,
    LogoComponent,
    NavbarComponent,
    PageComponent,
    WriterComponent,
    SignComponent,
    LoginComponent,
    SignupComponent
  ],
})
export class SharedModule { }
