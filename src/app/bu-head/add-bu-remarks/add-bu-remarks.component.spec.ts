import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuRemarksComponent } from './add-bu-remarks.component';

describe('AddBuRemarksComponent', () => {
  let component: AddBuRemarksComponent;
  let fixture: ComponentFixture<AddBuRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBuRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
