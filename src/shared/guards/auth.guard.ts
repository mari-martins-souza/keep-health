import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../app/services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if(loginService.isLogged || localStorage.getItem('isLogged') === 'true') {
    return true;
  }
  
  router.navigate(['']);
  return false;
};
