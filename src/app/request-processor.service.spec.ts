import { TestBed } from '@angular/core/testing';

import { RequestProcessorService } from './request-processor.service';

describe('RequestProcessorService', () => {
  let service: RequestProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
