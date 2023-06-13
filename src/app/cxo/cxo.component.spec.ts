import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxoComponent } from './cxo.component';

describe('CxoComponent', () => {
  let component: CxoComponent;
  let fixture: ComponentFixture<CxoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
