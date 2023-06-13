import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuRemarksComponent } from './view-bu-remarks.component';

describe('ViewBuRemarksComponent', () => {
  let component: ViewBuRemarksComponent;
  let fixture: ComponentFixture<ViewBuRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBuRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
