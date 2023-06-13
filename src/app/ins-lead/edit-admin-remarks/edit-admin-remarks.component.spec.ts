import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminRemarksComponent } from './edit-admin-remarks.component';

describe('EditAdminRemarksComponent', () => {
  let component: EditAdminRemarksComponent;
  let fixture: ComponentFixture<EditAdminRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdminRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
