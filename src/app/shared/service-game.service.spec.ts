import { TestBed } from '@angular/core/testing';

import { ServiceGameService } from './service-game.service';

describe('ServiceGameService', () => {
  let service: ServiceGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
