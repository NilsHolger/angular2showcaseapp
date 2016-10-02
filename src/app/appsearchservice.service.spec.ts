/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppsearchserviceService } from './appsearchservice.service';

describe('Service: Appsearchservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppsearchserviceService]
    });
  });

  it('should ...', inject([AppsearchserviceService], (service: AppsearchserviceService) => {
    expect(service).toBeTruthy();
  }));
});
