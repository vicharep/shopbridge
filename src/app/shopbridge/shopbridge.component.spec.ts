import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbridgeComponent } from './shopbridge.component';

describe('ShopbridgeComponent', () => {
  let component: ShopbridgeComponent;
  let fixture: ComponentFixture<ShopbridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
