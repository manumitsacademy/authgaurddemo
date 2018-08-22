import { TestBed, inject } from '@angular/core/testing';

import { PqrService } from './pqr.service';

describe('PqrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PqrService]
    });
  });

  it('should be created', inject([PqrService], (service: PqrService) => {
    expect(service).toBeTruthy();
  }));
});
