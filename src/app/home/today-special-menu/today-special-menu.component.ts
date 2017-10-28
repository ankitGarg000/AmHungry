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
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.homeService.getCategories().subscribe((categories) => {
      this.categories = categories.data;
      console.log(this.categories);
    })
  }

  goToMenu(id: any) {
    if (JSON.parse(localStorage.getItem('phoneNumber'))) {
      const phoneNo = JSON.parse(localStorage.getItem('phoneNumber')).number;
      if (phoneNo) {
        this.router.navigate(['/home', 'profile', id]);
      }
    } else {
      this.router.navigate(['/home', id]);
    }
  }
}
