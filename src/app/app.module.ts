import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

// services
import { JsonPlaceHolderService } from '@services/json-place-holder';

// pages
import { LandingPage } from '@pages/landing';
import { UserPage } from '@pages/user';

// components
import { UserFormComponent } from './components/user-form/user-form.component.ts';
import { UserComponent } from './components/user/user.component.ts';
import { AlbumComponent } from './components/album/album.component.ts';
import { PhotoComponent } from './components/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    UserPage,
    UserFormComponent,
    UserComponent,
    AlbumComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    JsonPlaceHolderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
