import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuRemarksComponent } from './edit-bu-remarks.component';

describe('EditBuRemarksComponent', () => {
  let component: EditBuRemarksComponent;
  let fixture: ComponentFixture<EditBuRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBuRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBuRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
