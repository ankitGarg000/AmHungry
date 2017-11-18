import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { HomeService } from '../../home.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
  selector: 'app-remove-item-modal',
  templateUrl: './remove-item-modal.component.html',
  styleUrls: ['./remove-item-modal.component.css']
})
export class RemoveItemModalComponent implements OnInit {

  constructor(
    private router: Router,
    private homeService: HomeService,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig) { }
  @ViewChild('removeItemModal') public removeItemModal: ModalDirective;
  categoryId: any;
  cartItems: Array<any>;
  loader: boolean;
  noOfItems: Number = 0;
  amount: any = 0;
  total: string;
  itemArray: Array<any>;
  @Input() itemId?: string;
  @Input() title?: string;
  ngOnInit() {
  }


  show() {
    this.removeItemModal.show();
  }
  hide() {
    this.removeItemModal.hide();
  }

  removeItem() {
    let id: any = this.itemId;
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
        this.removeItemModal.hide();
        this.router.navigate(['/home/profile/cartItems']);
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
        this.removeItemModal.hide();
      }
    });
  }

}
