import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarProfileComponent } from './navbar-profile/navbar-profile.component';
import { ProfileComponent } from './profile.component';
import { appProfileRoutes } from './profile.routes';

@NgModule({
  declarations: [
    ProfileComponent,
    NavbarProfileComponent,],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: []
})
export class ProfileModule { }
