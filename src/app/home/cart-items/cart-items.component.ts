import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { GenerateOrderModalComponent } from '../commonComponents/generate-order-modal/generate-order-modal.component';
import { RemoveItemModalComponent } from '../commonComponents/remove-item-modal/remove-item-modal.component';


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
  itemId: string;
  // discount: any = 5;
  itemObj: Object;
  itemArray: Array<any>;
  @ViewChild('generateOrderModal') generateOrderModal: GenerateOrderModalComponent;
  @ViewChild('removeItemModal') removeItemModal: RemoveItemModalComponent;
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
  }

  ngOnInit() {
    this.homeService.getCartDetails().subscribe(items => {
      this.cartItems = items.data;
      console.log(this.cartItems);
      if (this.cartItems) {
        this.cartItems.map((cartItem) => {
          this.amount = this.amount + cartItem.basePriceUnit * cartItem.minValue;
          this.itemObj = {
            productId: cartItem._id,
            quantity: cartItem.minValue,
            price: cartItem.basePriceUnit,
            name: cartItem.productName
          }
          this.itemArray.push(this.itemObj);
        });
        console.log(this.itemArray);
        this.total = (this.amount).toString();
        console.log(this.total);
      }
    });
  }
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

  removeItemModalShow(id) {
    this.itemId = id;
    this.removeItemModal.show();
  }

  generateOrder() {
    this.generateOrderModal.show();
  }

}
