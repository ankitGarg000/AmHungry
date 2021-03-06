import { Component, OnInit, ViewChild, ElementRef, ContentChild, ViewContainerRef } from '@angular/core';
import { HomeService } from '../../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective, ModalModule } from 'ng2-bootstrap/ng2-bootstrap'
// import {ModalModule} from "ngx-modal"
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { Modal } from "ngx-modal";
import _ from 'lodash';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:scroll)': 'fixedHeader($event)'
  }
})
export class NavbarComponent implements OnInit {

  currPos: number;
  loader: Boolean;
  isScrolled: boolean;
  changePos: Number = 70;
  categories: any;
  isLoggedIn: Boolean;
  verify: Boolean;
  authorization: String;
  otp: Number;
  error: String;
  dayName: String;
  days: Array<string> = [
    "SUNDAY",
    "Monday's Menu",
    "Tuesday",
    "Wednesday's Menu",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
  ];
  @ViewChild('childModal') childModal: LoginModalComponent;
  // @ViewChild('myModal') modal: ModalDirective;
  // @ContentChild(Modal) modal: Modal;

  constructor(private homeService: HomeService, private router: Router) {
    this.homeService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data.data;
    });
    this.dayName = this.getWeekDayName();


  }

  ngOnInit() {

    // this.modal.show();
  }
  open() {
    this.childModal.show();
    localStorage.setItem('showLoginModal', '1');
  }

  getWeekDayName() {
    var date = new Date();

    var dayName = this.days[date.getDay()].toLowerCase();

    return dayName;
  }

  // openExt():void {
  //   this.modal.open();
  // }

  fixedHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  openMenu(name: String) {
    const todayDayName = name.toLowerCase();
    const selectedDay = _.findIndex(this.categories, (category) => { return _.includes(category.name.toLowerCase(), name) });
    const selectedMenu = this.categories[selectedDay];
    this.homeService.sendSubCategoryId(selectedMenu._id);
    this.router.navigate(['/home', selectedMenu._id]);
  }


}
