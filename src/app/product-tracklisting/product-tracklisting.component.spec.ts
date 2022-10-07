import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTracklistinComponent } from './product-tracklisting.component';

describe('ProductTracklistinComponent', () => {
  let component: ProductTracklistinComponent;
  let fixture: ComponentFixture<ProductTracklistinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTracklistinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTracklistinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
