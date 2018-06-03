import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.ToggleNavbar(false);
  }

}
