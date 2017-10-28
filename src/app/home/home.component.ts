import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIN: Boolean;
  phoneNo; String;
  showNavbar : any = true;
  subscription: Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private homeService: HomeService) { 

   }

  ngOnInit() {
    // this.route.params.subscribe((route) => {
    //   debugger;
      
    //   console.log(this.showNavbar);
    // });
      this.subscription = this.homeService.getBoolean().subscribe(value => {
        console.log(value);
        this.showNavbar = value;
      });
    console.log(this.showNavbar);
    if (JSON.parse(localStorage.getItem('phoneNumber'))) {
      this.phoneNo = JSON.parse(localStorage.getItem('phoneNumber')).number;
      if (this.phoneNo !== '') {
        this.homeService.ToggleNavbar(false);
        this.router.navigate(['/home', 'profile']);
      }
    }
  }

}
