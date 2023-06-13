import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusinessUnitComponent } from './view-business-unit.component';

describe('ViewBusinessUnitComponent', () => {
  let component: ViewBusinessUnitComponent;
  let fixture: ComponentFixture<ViewBusinessUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBusinessUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
