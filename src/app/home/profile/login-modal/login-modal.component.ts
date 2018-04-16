import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent1 implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('childLoginModal') public childLoginModal: ModalDirective;


  show() {
    this.childLoginModal.show();
  }
  hide() {
    this.childLoginModal.hide();
  }
}
