import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ModalModule } from "ngx-modal";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appHomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { NavbarComponent } from './commonComponents/navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SubOfSubCategoryComponent } from './sub-of-sub-category/sub-of-sub-category.component';
import { SubCategoryComponent } from './subCategory/subCategory.component';
import { TodaySpecialMenuComponent } from './today-special-menu/today-special-menu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CanActivateRouteGuard } from './home.guards';
import { ProfileModule } from './profile/profile.module';
import { ToastyModule, ToastyService } from 'ng2-toasty';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { LoginModalComponent } from './commonComponents/login-modal/login-modal.component';
import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';
import { GenerateOrderModalComponent } from './commonComponents/generate-order-modal/generate-order-modal.component';
import { AboutComponent } from './about/about.component';
import { RemoveItemModalComponent } from './commonComponents/remove-item-modal/remove-item-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    TodaySpecialMenuComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    ContactComponent,
    SubOfSubCategoryComponent,
    SubCategoryComponent,
    TestimonialsComponent,
    HowItWorksComponent,
    CartItemsComponent,
    LoginModalComponent,
    GenerateOrderModalComponent,
    AboutComponent,
    RemoveItemModalComponent
  ],
  imports: [
    RouterModule.forChild(appHomeRoutes),
    ToastyModule.forRoot(),
    ModalModule.forRoot(),
    ProfileModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ HomeService, CanActivateRouteGuard, ToastyService ]
})
export class HomeModule { }
