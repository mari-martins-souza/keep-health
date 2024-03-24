import { TestBed } from '@angular/core/testing';

import { ResetSenhaService } from './reset-senha.service';

describe('ResetSenhaService', () => {
  let service: ResetSenhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetSenhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
