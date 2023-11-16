import { TestBed } from '@angular/core/testing';

import { UniversitieService } from './universitie.service';

describe('UniversitieService', () => {
  let service: UniversitieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
