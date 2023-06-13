import { TestBed } from '@angular/core/testing';

import { AdminRemarksService } from './admin-remarks.service';

describe('AdminRemarksService', () => {
  let service: AdminRemarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRemarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
