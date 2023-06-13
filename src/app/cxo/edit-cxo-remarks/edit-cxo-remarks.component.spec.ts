import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCxoRemarksComponent } from './edit-cxo-remarks.component';

describe('EditCxoRemarksComponent', () => {
  let component: EditCxoRemarksComponent;
  let fixture: ComponentFixture<EditCxoRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCxoRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCxoRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
