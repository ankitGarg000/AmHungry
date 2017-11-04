import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { Params, ActivatedRoute } from '@angular/router';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { LoginModalComponent } from '../commonComponents/login-modal/login-modal.component';


@Component({
  selector: 'app-sub-of-sub-category',
  templateUrl: './sub-of-sub-category.component.html',
  styleUrls: ['./sub-of-sub-category.component.css']
})
export class SubOfSubCategoryComponent implements OnInit {

  subCategoryId: any;
  categoryName: string;
  subOfSubCategories: any;
  subCategoryName: string;
  loader: boolean;
  number: string;
  phoneNumber: Number;
  added: Boolean;
  @ViewChild('childModal') childModal: LoginModalComponent;
  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {
    this.loader = false;
    this.subCategoryId = this.route.snapshot.params['subCategoryId'];
    this.homeService.getSubOfSubCategories(this.subCategoryId).subscribe((data) => {
      this.loader = true;
      this.subOfSubCategories = data.data;
      this.categoryName = this.subOfSubCategories[0].categoryId.name;
      this.subCategoryName = this.subOfSubCategories[0].subcategoryId.name;
    });
    if(JSON.parse(localStorage.getItem('phoneNumber'))){
      this.number = JSON.parse(localStorage.getItem('phoneNumber')).number;
      this.phoneNumber = parseInt(this.number);
      console.log('this.number');
      console.log(this.phoneNumber);
      console.log(typeof this.phoneNumber);
    }
  }

  addItem(id: any) {
    debugger;
    console.log(this.phoneNumber);
    if (this.phoneNumber===undefined) {
      this.childModal.show();
    } else {
      this.homeService.addItemToCart(id).subscribe((data) => {
        if (data.statusCode === 200 && data.data.type==='TIME_OVER') {
          this.homeService.sendCount(1);
          var toastOptions: ToastOptions = {
            title: "",
            msg: data.data.customMessage,
            showClose: true,
            timeout: 2000,
            theme: 'default',
          };
          this.toastyService.success(toastOptions);
        } else if (data.statusCode === 200) {
          this.homeService.sendCount(1);
          var toastOptions: ToastOptions = {
            title: "",
            msg:'Added Successfully',
            showClose: true,
            timeout: 2000,
            theme: 'default',
          };
          this.toastyService.success(toastOptions);
        }
      }, (err) => {
        err = err.json();
        {
          var toastOptions: ToastOptions = {
            title: "",
            msg: err.message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
          };
          this.toastyService.error(toastOptions);
        }
      });
    }
  }
}

