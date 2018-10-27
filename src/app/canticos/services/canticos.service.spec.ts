import { TestBed } from '@angular/core/testing';

import { CanticosService } from './canticos.service';

describe('CanticosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanticosService = TestBed.get(CanticosService);
    expect(service).toBeTruthy();
  });
});
