import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import _ from 'lodash';




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
  dayName: String;
  days: Array<string> = [
    "SUNDAY",
    "Monday's Menu",
    "Tuesday",
    "Wednesday' Menu",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
  ];

  constructor(private homeService: HomeService, private router: Router) { 
     this.homeService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data.data;
    });
    this.dayName = this.getWeekDayName();
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

  getWeekDayName() {
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "SUNDAY";
    weekday[1] = "Monday's Menu";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday's Menu";
    weekday[4] = "THURSDAY";
    weekday[5] = "FRIDAY";
    weekday[6] = "SATURDAY";

    var dayName = weekday[date.getDay()];

    return dayName;
  }


  logout() {
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('showLoginModal');
    this.isLoggedIn = false;
    this.homeService.ToggleNavbar(true);
    this.router.navigate(['../']);
  }

  openMenu(name: String) {
    const selectedDay = _.findIndex(this.categories, (category) => { return category.name === name });
    const selectedMenu = this.categories[selectedDay];
    this.homeService.sendSubCategoryId(selectedMenu._id);
    this.router.navigate(['/home/profile', selectedMenu._id]);
  }

  goToCartItems(){
    this.router.navigate(['/home/profile', 'cartItems']);
  }

}
