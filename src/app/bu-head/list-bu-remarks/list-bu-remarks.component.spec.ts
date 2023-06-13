import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuRemarksComponent } from './list-bu-remarks.component';

describe('ListBuRemarksComponent', () => {
  let component: ListBuRemarksComponent;
  let fixture: ComponentFixture<ListBuRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBuRemarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBuRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
