import { TestBed, inject } from '@angular/core/testing';

import { AwesomeFeatureService } from './awesome-feature.service';

describe('AwesomeFeatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwesomeFeatureService]
    });
  });

  it('should be created', inject([AwesomeFeatureService], (service: AwesomeFeatureService) => {
    expect(service).toBeTruthy();
  }));
});
