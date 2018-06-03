import { Component, OnInit } from '@angular/core';
import { TodaySpecial } from './today-special-menu.inerface';
import { HomeService } from '../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import _ from 'lodash';


@Component({
  selector: 'app-today-special-menu',
  templateUrl: './today-special-menu.component.html',
  styleUrls: ['./today-special-menu.component.css']
})
export class TodaySpecialMenuComponent implements OnInit {


  categories: any;
  dayName: Object;
  days: Array<Object> = [
    {
      name: "SUNDAY",
      thumbnail: '/assets/images/sunday.jpg'
    },
    {
      name: "Monday's Menu",
      thumbnail: '/assets/images/monday.jpg'
    },
    {
      name: "Wednesday' Menu",
      thumbnail: '/assets/images/wednesday.jpg'
    },
    {
      name: "THURSDAY",
      thumbnail: '/assets/images/thrusday.jpg'
    },
    {
      name: "FRIDAY",
      thumbnail: '/assets/images/friday.jpg'
    },
    {
      name: "SATURDAY",
      thumbnail: '/assets/images/saturday.jpg'
    },
  ];
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
    var dayName = this.days[date.getDay()];

    return dayName;
  }

  goToMenu(name: any) {
    debugger;
    const phoneNo = JSON.parse(localStorage.getItem('phoneNumber'));
    const selectedDay = _.findIndex(this.categories, (category) => { return category.name === name });
    const selectedMenu = this.categories[selectedDay];
    const id = selectedMenu._id;
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
