import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSalesTrafficChartComponent } from './app-sales-traffic-chart.component';

describe('AppSalesTrafficChartComponent', () => {
  let component: AppSalesTrafficChartComponent;
  let fixture: ComponentFixture<AppSalesTrafficChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSalesTrafficChartComponent]
    });
    fixture = TestBed.createComponent(AppSalesTrafficChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
