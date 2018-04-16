import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { LoginModalComponent1 } from './login-modal/login-modal.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  @ViewChild('childLoginModal') childLoginModal :LoginModalComponent1;

  ngOnInit() {
    this.homeService.ToggleNavbar(false);
    this.childLoginModal.show();
  }

}
