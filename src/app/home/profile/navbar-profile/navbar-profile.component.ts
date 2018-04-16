import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css'],
  host: {
    '(window:scroll)': 'fixedHeader($event)'
  }
})
export class NavbarProfileComponent implements OnInit {

  currPos: number;
  loader: Boolean;
  isScrolled: boolean;
  changePos: Number = 70;
  categories: any;
  isLoggedIn: Boolean;
  verify: Boolean;
  authorization: String;
  otp: Number;
  existsOrder: Number;
  Orders: Array<any>;

  constructor(private homeService: HomeService, private router: Router) { 
     this.homeService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data.data;
    });
   }

  ngOnInit() {
    this.homeService.getCartDetails().subscribe(items => {
      this.Orders = items.data;
      this.existsOrder = this.Orders.length;
      localStorage.setItem('noOfOrders', JSON.stringify(this.existsOrder));
    });
    this.homeService.addCountToCart().subscribe((data) => {
      this.existsOrder = data + this.existsOrder;
    });
  }

   fixedHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }


  logout() {
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('showLoginModal');
    this.isLoggedIn = false;
    this.homeService.ToggleNavbar(true);
    this.router.navigate(['../']);
  }

  openMenu(id: any) {
    this.homeService.sendSubCategoryId(id);
    this.router.navigate(['/home/profile', id]);
  }

  goToCartItems(){
    this.router.navigate(['/home/profile', 'cartItems']);
  }

}
