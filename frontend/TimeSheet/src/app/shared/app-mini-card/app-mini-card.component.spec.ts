import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMiniCardComponent } from './app-mini-card.component';

describe('AppMiniCardComponent', () => {
  let component: AppMiniCardComponent;
  let fixture: ComponentFixture<AppMiniCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMiniCardComponent]
    });
    fixture = TestBed.createComponent(AppMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
