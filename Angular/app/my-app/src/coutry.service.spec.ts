import { TestBed } from '@angular/core/testing';

import { CoutryService } from './coutry.service';

describe('CoutryService', () => {
  let service: CoutryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoutryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
