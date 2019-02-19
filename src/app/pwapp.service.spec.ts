import { TestBed } from '@angular/core/testing';

import { PwappService } from './pwapp.service';

describe('PwappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PwappService = TestBed.get(PwappService);
    expect(service).toBeTruthy();
  });
});
