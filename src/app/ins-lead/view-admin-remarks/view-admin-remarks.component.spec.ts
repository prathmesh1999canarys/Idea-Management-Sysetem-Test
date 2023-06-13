import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminRemarksComponent } from './view-admin-remarks.component';

describe('ViewAdminRemarksComponent', () => {
  let component: ViewAdminRemarksComponent;
  let fixture: ComponentFixture<ViewAdminRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
