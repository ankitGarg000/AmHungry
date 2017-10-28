import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { ContactComponent } from '../contact/contact.component';
import { SubOfSubCategoryComponent } from '../sub-of-sub-category/sub-of-sub-category.component';
import { SubCategoryComponent } from '../subCategory/subCategory.component';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { CanActivateRouteGuard } from '../home.guards';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';

export const appProfileRoutes: Routes = [
    {
        path: '', component: ProfileComponent, children:
            [
                { path: '', component: SliderComponent },
                { path: 'cartItems', component: CartItemsComponent },
                { path: 'about', component: AboutComponent },
                { path: 'contact', component: ContactComponent },
                { path: ':categoryId', component: SubCategoryComponent },
                { path: ':categoryId/:subCategoryId', component: SubOfSubCategoryComponent },
            ] 
        // , canActivateChild: [CanActivateRouteGuard] 
    },
    { path: ':categoryId', component: SubCategoryComponent },
    { path: ':categoryId/:subCategoryId', component: SubOfSubCategoryComponent },
];