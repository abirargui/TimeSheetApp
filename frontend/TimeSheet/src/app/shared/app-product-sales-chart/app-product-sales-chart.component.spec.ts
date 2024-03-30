import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductSalesChartComponent } from './app-product-sales-chart.component';

describe('AppProductSalesChartComponent', () => {
  let component: AppProductSalesChartComponent;
  let fixture: ComponentFixture<AppProductSalesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppProductSalesChartComponent]
    });
    fixture = TestBed.createComponent(AppProductSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
