import { Component, OnInit } from '@angular/core';
import { TodaySpecial } from './today-special-menu.inerface';
import { HomeService } from '../home.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-today-special-menu',
  templateUrl: './today-special-menu.component.html',
  styleUrls: ['./today-special-menu.component.css']
})
export class TodaySpecialMenuComponent implements OnInit {


  categories: any;
  dayName: String;
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.homeService.getCategories().subscribe((categories) => {
      this.categories = categories.data;
      console.log(this.categories);
    })
    this.dayName = this.getWeekDayName();
  }

  getWeekDayName() {
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "SUNDAY";
    weekday[1] = "Monday's Menu";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday' Menu";
    weekday[4] = "THURSDAY";
    weekday[5] = "FRIDAY";
    weekday[6] = "SATURDAY";

    var dayName = weekday[date.getDay()];

    return dayName;
  }

  goToMenu(id: any) {
    debugger;
    const phoneNo = JSON.parse(localStorage.getItem('phoneNumber'));
    if (phoneNo) {
      if (phoneNo !== undefined) {
        this.router.navigate(['/home', 'profile', id]);
      } else {
        this.router.navigate(['/home', id]);
      }
    } else {
      this.router.navigate(['/home', id]);
    }
  }
}
