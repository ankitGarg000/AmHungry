import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { SubOfSubCategoryComponent } from './sub-of-sub-category/sub-of-sub-category.component';
import { SubCategoryComponent } from './subCategory/subCategory.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CanActivateRouteGuard } from './home.guards';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { appProfileRoutes } from './profile/profile.routes';


export const appHomeRoutes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: 
        [
            { path: '', component: SliderComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'about', component: AboutComponent },
            { path: 'profile', component: ProfileComponent, children: appProfileRoutes },
            { path: ':categoryId', component: SubCategoryComponent},
            { path: ':categoryId/:subCategoryId', component: SubOfSubCategoryComponent},
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];