import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminRemarksComponent } from './add-admin-remarks.component';

describe('AddAdminRemarksComponent', () => {
  let component: AddAdminRemarksComponent;
  let fixture: ComponentFixture<AddAdminRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
