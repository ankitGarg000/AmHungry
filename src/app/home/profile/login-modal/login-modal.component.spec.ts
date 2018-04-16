import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalComponent1 } from './login-modal.component';

describe('LoginModalComponent1', () => {
  let component: LoginModalComponent1;
  let fixture: ComponentFixture<LoginModalComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModalComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
