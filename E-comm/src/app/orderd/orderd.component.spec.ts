import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdComponent } from './orderd.component';

describe('OrderdComponent', () => {
  let component: OrderdComponent;
  let fixture: ComponentFixture<OrderdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderdComponent]
    });
    fixture = TestBed.createComponent(OrderdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
