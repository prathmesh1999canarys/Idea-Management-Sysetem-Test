import { TestBed } from '@angular/core/testing';

import { AzureUserService } from './azure-user.service';

describe('AzureUserService', () => {
  let service: AzureUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
