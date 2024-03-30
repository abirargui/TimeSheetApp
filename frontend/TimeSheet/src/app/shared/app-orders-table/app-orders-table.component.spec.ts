import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrdersTableComponent } from './app-orders-table.component';

describe('AppOrdersTableComponent', () => {
  let component: AppOrdersTableComponent;
  let fixture: ComponentFixture<AppOrdersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppOrdersTableComponent]
    });
    fixture = TestBed.createComponent(AppOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
