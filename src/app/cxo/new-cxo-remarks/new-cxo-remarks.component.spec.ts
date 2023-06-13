import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCxoRemarksComponent } from './new-cxo-remarks.component';

describe('NewCxoRemarksComponent', () => {
  let component: NewCxoRemarksComponent;
  let fixture: ComponentFixture<NewCxoRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCxoRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCxoRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
