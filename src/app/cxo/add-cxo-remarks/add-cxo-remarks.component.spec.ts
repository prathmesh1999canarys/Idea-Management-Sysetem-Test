import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCxoRemarksComponent } from './add-cxo-remarks.component';

describe('AddCxoRemarksComponent', () => {
  let component: AddCxoRemarksComponent;
  let fixture: ComponentFixture<AddCxoRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCxoRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCxoRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
