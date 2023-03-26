import { TestBed } from '@angular/core/testing';

import { QuizRequestsService } from './quiz-requests.service';

describe('QuizRequestsService', () => {
  let service: QuizRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
