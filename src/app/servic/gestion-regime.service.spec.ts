import { TestBed } from '@angular/core/testing';

import { GestionRegimeService } from './gestion-regime.service';

describe('GestionRegimeService', () => {
  let service: GestionRegimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionRegimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
