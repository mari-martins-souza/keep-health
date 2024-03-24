import { TestBed } from '@angular/core/testing';

import { ConsultarUsuarioService } from './consultar-usuario.service';

describe('ConsultarUsuarioService', () => {
  let service: ConsultarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
