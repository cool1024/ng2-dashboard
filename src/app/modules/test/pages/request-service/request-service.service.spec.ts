import { TestBed, inject } from '@angular/core/testing';

import { RequestServiceService } from './request-service.service';

describe('RequestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestServiceService]
    });
  });

  it('should be created', inject([RequestServiceService], (service: RequestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
