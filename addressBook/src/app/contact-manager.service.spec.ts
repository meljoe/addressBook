import { TestBed } from '@angular/core/testing';

import { ContactManagerService } from './contact-manager.service';

describe('ContactManagerService', () => {
  //let service: ContactManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  //service = TestBed.inject(ContactManagerService);
  });

  it('should be created', () => {
    const service: ContactManagerService = TestBed.get(ContactManagerService);
    expect(service).toBeTruthy();
  });
});
