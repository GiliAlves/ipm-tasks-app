import { TestBed } from '@angular/core/testing';

import { HinarioService } from './hinario.service';

describe('HinarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HinarioService = TestBed.get(HinarioService);
    expect(service).toBeTruthy();
  });
});
