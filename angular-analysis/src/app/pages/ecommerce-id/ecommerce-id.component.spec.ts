import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceIdComponent } from './ecommerce-id.component';

describe('EcommerceIdComponent', () => {
  let component: EcommerceIdComponent;
  let fixture: ComponentFixture<EcommerceIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
