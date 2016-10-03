/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WikipediaserviceService } from './wikipediaservice.service';

describe('Service: Wikipediaservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikipediaserviceService]
    });
  });

  it('should ...', inject([WikipediaserviceService], (service: WikipediaserviceService) => {
    expect(service).toBeTruthy();
  }));
});
