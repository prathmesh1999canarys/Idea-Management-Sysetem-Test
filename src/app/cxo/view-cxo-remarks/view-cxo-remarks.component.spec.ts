import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCxoRemarksComponent } from './view-cxo-remarks.component';

describe('ViewCxoRemarksComponent', () => {
  let component: ViewCxoRemarksComponent;
  let fixture: ComponentFixture<ViewCxoRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCxoRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCxoRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
