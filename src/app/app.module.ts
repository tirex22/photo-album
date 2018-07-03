import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

//pages
import { LandingPage } from '@pages/landing';
import { UserPage } from '@pages/user';

//components
import { UserFormComponent } from './components/user-form';
import { UserComponent } from './components/user/';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    UserPage,
    UserFormComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
