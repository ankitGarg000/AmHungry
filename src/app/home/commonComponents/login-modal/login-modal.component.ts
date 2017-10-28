import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeService } from '../../home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;
  loader: Boolean;
  isLoggedIn: Boolean;
  verify: Boolean;
  authorization: String;
  otp: Number;
  error: String;
  constructor(private form: FormBuilder, private homeService: HomeService, private router: Router) {

    this.loginForm = this.form.group({
      phone: ['', [Validators.required, Validators.pattern('^[789][0-9]{9}$'), Validators.maxLength(10)]],
      otp: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  @ViewChild('childModal') public childModal: ModalDirective;
  @Input() title?: string;

  show() {
    this.childModal.show();
    this.loader = false;
    this.verify = false;
    this.loginForm.reset();
  }
  hide() {
    this.childModal.hide();
  }


  sendOtp(number: any) {
    this.loader = true;
    setTimeout(() => {
      this.homeService.sendOtpToUser(number).subscribe((response) => {
        if (response) {
          this.isLoggedIn = response.data.phoneVerified;
          this.authorization = response.data.accessToken;
          this.otp = response.data.OTPCode;
        } else {
          console.log('error');
        }
        if (response && this.isLoggedIn) {
          localStorage.setItem('phoneNumber', JSON.stringify({ number }));
          localStorage.setItem('accessToken', JSON.stringify(this.authorization));
          this.homeService.ToggleNavbar(false);
          this.router.navigate(['/home', 'profile']);
          this.verify = true;
          this.loader = false;
          this.childModal.hide();
        }
        console.log('******************response***************');
        console.log(response);
        localStorage.setItem('phoneNumber', JSON.stringify({ number }));
        localStorage.setItem('accessToken', JSON.stringify(this.authorization));
        this.verify = true;
        this.loader = false;
      });

    }, 1000);
  }



  verifyOtp(value: any) {
    let phoneNumber = value.phone;
    let otp = value.otp;
    this.loader = true;
    this.homeService.verifyOtp(phoneNumber, otp).subscribe((response) => {
      console.log('******************responseVerify***************');
      console.log(response);
      if (response) {
        if(response.statusCode === 200)
        {localStorage.setItem('phoneNumber', JSON.stringify({ phoneNumber }));
        this.isLoggedIn = true;
        this.loader = false;
        this.homeService.ToggleNavbar(false);
        this.router.navigate(['/home', 'profile']);
        this.childModal.hide();  
      }
      }
    }, (error) => {
      if (error) {
        this.error = 'Invalid Verification Code';
      }
    });

  }

  resendOtp(value: any) {
    let phoneNumber = value.phone;
    this.homeService.resendOtp(phoneNumber).subscribe((response) => {
      console.log(response);
    });
  }

}
