import { TestBed } from '@angular/core/testing';

import { Database.ServiceService } from './database.service.service';

describe('Database.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Database.ServiceService = TestBed.get(Database.ServiceService);
    expect(service).toBeTruthy();
  });
});
