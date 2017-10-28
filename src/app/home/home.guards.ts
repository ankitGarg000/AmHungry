import { Injectable } from '@angular/core';
import { CanActivateChild, Router, CanActivate } from '@angular/router';


@Injectable()

export class CanActivateRouteGuard implements CanActivate {
    constructor(private router: Router) {

    }

    canActivate() {
        if (JSON.parse(localStorage.getItem('phoneNumber'))) {
            if (JSON.parse(localStorage.getItem('phoneNumber')).number) {
                this.router.navigate(['/home', 'profile']);
                return true;
            }
        } else {
            this.router.navigate(['/home']);
            return false;
        }
    }
}