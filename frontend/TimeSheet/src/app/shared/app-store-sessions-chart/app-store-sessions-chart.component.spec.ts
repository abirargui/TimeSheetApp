import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStoreSessionsChartComponent } from './app-store-sessions-chart.component';

describe('AppStoreSessionsChartComponent', () => {
  let component: AppStoreSessionsChartComponent;
  let fixture: ComponentFixture<AppStoreSessionsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppStoreSessionsChartComponent]
    });
    fixture = TestBed.createComponent(AppStoreSessionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
