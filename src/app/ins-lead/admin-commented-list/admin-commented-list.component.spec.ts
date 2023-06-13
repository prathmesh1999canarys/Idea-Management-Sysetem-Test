import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentedListComponent } from './admin-commented-list.component';

describe('AdminCommentedListComponent', () => {
  let component: AdminCommentedListComponent;
  let fixture: ComponentFixture<AdminCommentedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommentedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommentedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
