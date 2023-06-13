import { TestBed } from '@angular/core/testing';

import { BuHeadRemarksService } from './bu-head-remarks.service';

describe('BuHeadRemarksService', () => {
  let service: BuHeadRemarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuHeadRemarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
