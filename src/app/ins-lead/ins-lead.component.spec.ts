import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsLeadComponent } from './ins-lead.component';

describe('InsLeadComponent', () => {
  let component: InsLeadComponent;
  let fixture: ComponentFixture<InsLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
