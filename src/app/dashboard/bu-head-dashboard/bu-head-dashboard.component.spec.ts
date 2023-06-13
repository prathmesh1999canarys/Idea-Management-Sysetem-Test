import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuHeadDashboardComponent } from './bu-head-dashboard.component';

describe('BuHeadDashboardComponent', () => {
  let component: BuHeadDashboardComponent;
  let fixture: ComponentFixture<BuHeadDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuHeadDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuHeadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
