import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { appHomeRoutes } from './home/home.routes';
import { ProfileComponent } from './home/profile/profile.component'
import { appProfileRoutes } from './home/profile/profile.routes'
const appRoutes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full' },
  { path: '', component: HomeComponent, children: appHomeRoutes },
  { path: '', component: ProfileComponent, data: { title: 'Second Views' }, children: appProfileRoutes }
];

@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    HomeModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
