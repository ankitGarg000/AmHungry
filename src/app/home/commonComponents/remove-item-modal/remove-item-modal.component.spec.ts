import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveItemModalComponent } from './remove-item-modal.component';

describe('RemoveItemModalComponent', () => {
  let component: RemoveItemModalComponent;
  let fixture: ComponentFixture<RemoveItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
