import { TestBed } from '@angular/core/testing';

import { HbtsService } from './hbts.service';

describe('HbtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HbtsService = TestBed.get(HbtsService);
    expect(service).toBeTruthy();
  });
});
