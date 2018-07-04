import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { JsonPlaceHolderService } from '@services/json-place-holder';

// pages
import { LandingPage } from '@pages/landing';
import { UserPage } from '@pages/user';

// components
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    UserPage,
    UserFormComponent,
    UserComponent,
    AlbumComponent,
    PhotoComponent,
    InfoBarComponent,
    ActionBarComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    JsonPlaceHolderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
