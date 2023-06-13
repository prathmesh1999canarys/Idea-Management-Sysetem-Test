import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminRemarksComponent } from './list-admin-remarks.component';

describe('ListAdminRemarksComponent', () => {
  let component: ListAdminRemarksComponent;
  let fixture: ComponentFixture<ListAdminRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdminRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
