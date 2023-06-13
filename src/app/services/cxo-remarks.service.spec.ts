import { TestBed } from '@angular/core/testing';

import { CXORemarksService } from './cxo-remarks.service';

describe('CXORemarksService', () => {
  let service: CXORemarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CXORemarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
