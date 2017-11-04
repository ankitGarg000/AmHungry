import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { GenerateOrderModalComponent } from '../commonComponents/generate-order-modal/generate-order-modal.component';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  categoryId: any;
  cartItems: Array<any>;
  loader: boolean;
  noOfItems: Number = 0;
  amount: any = 0;
  total: string ;
  // discount: any = 5;
  itemObj: Object;
  itemArray: Array<any>;
  @ViewChild('generateOrderModal') generateOrderModal: GenerateOrderModalComponent;
  constructor(
    private router: Router,
    private homeService: HomeService,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'material';
    this.itemArray = new Array();
    this.loader = true;
    debugger;
    this.homeService.getCartDetails().subscribe(items => {
      this.cartItems = items.data;
      console.log(this.cartItems);
      if (this.cartItems) {
        this.cartItems.map((cartItem) => {
          this.amount = this.amount + cartItem.basePriceUnit * cartItem.minValue;
          // this.itemObj = {
          //   productId: cartItem._id,
          //   quantity: cartItem.minValue,
          //   price: cartItem.basePriceUnit,
          //   name: cartItem.productName
          // }
          this.itemArray.push(cartItem._id);
        });
        console.log(this.itemArray);
        this.total = (this.amount).toString();
        console.log(this.total);
      }
    });
  }

  ngOnInit() {


  }

  // addToast() {
  //       // Or create the instance of ToastOptions
  //       var toastOptions:ToastOptions = {
  //           title: "My title",
  //           msg: "The message",
  //           showClose: true,
  //           timeout: 5000,
  //           theme: 'default',
  //       };
  //       // Add see all possible types in one shot
  //       // this.toastyService.info(toastOptions);
  //       this.toastyService.success(toastOptions);
  //       // this.toastyService.wait(toastOptions);
  //       // this.toastyService.error(toastOptions);
  //       // this.toastyService.warning(toastOptions);
  //   }

  incrementNoOfItem(id: any) {
    this.cartItems.map((cartItem) => {
      if (cartItem._id === id) {
        this.noOfItems = cartItem.minValue;
        cartItem.minValue += 1;
        this.amount = this.amount + cartItem.basePriceUnit;
        this.total = (this.amount).toString();
      }
    });
  }

  decrementNoOfItem(id: any) {
    console.log(id);
    this.cartItems.map((cartItem) => {
      if (cartItem._id === id) {
        this.noOfItems = cartItem.minValue;
        cartItem.minValue -= 1;
        this.amount = this.amount - cartItem.basePriceUnit;
        this.total = (this.amount).toString();
      }
    });
  }

  removeItem(id: any) {
    this.homeService.removeItemFromCart(id).subscribe((data) => {
      console.log(data);
      if (data.statusCode === 200) {
        this.homeService.sendCount(-1);
        this.homeService.getCartDetails().subscribe(items => {
          this.amount = 0;
          this.cartItems = items.data;
          this.cartItems.map((cartItem) => {
            this.amount = this.amount + cartItem.basePriceUnit * cartItem.minValue;
          });
          this.itemArray.splice(id, 1);
          console.log(this.itemArray);
          this.total = (this.amount).toString();
        });
        var toastOptions: ToastOptions = {
          title: "",
          msg: "Successfully Removed",
          showClose: true,
          timeout: 2000,
          theme: 'default',
        };
        this.toastyService.success(toastOptions);
      }
      else {
        var toastOptions: ToastOptions = {
          title: "",
          msg: "Cannot be removed due to some Error",
          showClose: true,
          timeout: 2000,
          theme: 'default',
        };
        this.toastyService.error(toastOptions);
      }
    });
  }

  generateOrder() {
    this.generateOrderModal.show();
  }

}
