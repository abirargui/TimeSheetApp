import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnnualSalesChartComponent } from './app-annual-sales-chart.component';

describe('AppAnnualSalesChartComponent', () => {
  let component: AppAnnualSalesChartComponent;
  let fixture: ComponentFixture<AppAnnualSalesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAnnualSalesChartComponent]
    });
    fixture = TestBed.createComponent(AppAnnualSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
