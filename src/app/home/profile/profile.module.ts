import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarProfileComponent } from './navbar-profile/navbar-profile.component';
import { ProfileComponent } from './profile.component';
import { appProfileRoutes } from './profile.routes';
import { LoginModalComponent1 } from './login-modal/login-modal.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NavbarProfileComponent,
    LoginModalComponent1],
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
