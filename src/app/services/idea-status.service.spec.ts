import { TestBed } from '@angular/core/testing';

import { IdeaStatusService } from './idea-status.service';

describe('IdeaStatusService', () => {
  let service: IdeaStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
