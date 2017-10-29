import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loader=false;
  title = 'app works!';

  ngOnInit() {
    this.loader=true;
    setTimeout(() => {
      this.loader = false;
    }, 3000);
  }
}
