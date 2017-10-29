import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeService } from '../../home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
  selector: 'app-generate-order-modal',
  templateUrl: './generate-order-modal.component.html',
  styleUrls: ['./generate-order-modal.component.css']
})
export class GenerateOrderModalComponent implements OnInit {

  generateOrderForm: FormGroup;
  loader: Boolean;
  isLoggedIn: Boolean;
  verify: Boolean;
  authorization: String;
  otp: Number;
  error: String;
  phoneNo1: Number;
  mySelect: String;
  accessToken: String;
  @ViewChild('generateOrderModal') public generateOrderModal: ModalDirective;
  @Input() title?: string;
  @Input() products?: Array<string>;
  @Input() total?:string;
  phoneNo2: Number;
  constructor(
    private form: FormBuilder,
    private router: Router,
    private homeService: HomeService,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.phoneNo1 = JSON.parse(localStorage.getItem('phoneNumber')).number;
    this.accessToken = JSON.parse(localStorage.getItem('accessToken'));
    console.log(this.phoneNo1);
    this.generateOrderForm = this.form.group({
      customerName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      orderMethod: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }
  show() {
    this.generateOrderModal.show();
    this.loader = false;
    this.verify = false;
    this.generateOrderForm.reset();
  }
  hide() {
    this.generateOrderModal.hide();
  }

  order(value: any) {
    debugger;
    const data = {
      productId: this.products,
      offer: '1',
      customerName: value.customerName,
      addressLine1: value.addressLine1,
      addressLine2: value.addressLine2,
      city: value.city,
      pinCode: value.pincode,
      phoneNo: this.phoneNo1,
      orderMethod: value.orderMethod,
      netAmount: this.total
    }
    console.log(data);
    this.homeService.generateOrder(data).subscribe((data) => {
      if (data.statusCode===200) {
        var toastOptions: ToastOptions = {
          title: ' Order Id:' + data.data,
          msg: data.message ,
          showClose: true,
          timeout: 12000,
          theme: 'default',
        };
        this.toastyService.success(toastOptions);
        this.generateOrderModal.hide();
      }
    })
  }

}
