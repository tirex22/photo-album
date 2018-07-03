import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { LandingPage } from '@pages/landing';
import { UserPage } from '@pages/user'


const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'user/:id', component: UserPage },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }