import { TestBed } from '@angular/core/testing';

import { TextesService } from './textes.service';

describe('TextesService', () => {
  let service: TextesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
