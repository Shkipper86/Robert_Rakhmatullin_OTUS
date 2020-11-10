import { TestBed } from '@angular/core/testing';

import { SaveLocalStorageService } from './save-local-storage.service';

describe('SaveLocalStorageService', () => {
  let service: SaveLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
