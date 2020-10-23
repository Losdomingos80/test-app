import { TestBed } from '@angular/core/testing';

import { OdczytajService } from './odczytaj.service';

describe('OdczytajService', () => {
  let service: OdczytajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdczytajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
