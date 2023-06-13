import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCxoRemarksComponent } from './list-cxo-remarks.component';

describe('ListCxoRemarksComponent', () => {
  let component: ListCxoRemarksComponent;
  let fixture: ComponentFixture<ListCxoRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCxoRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCxoRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
