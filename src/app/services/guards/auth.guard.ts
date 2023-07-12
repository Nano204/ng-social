import { CanDeactivateFn } from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';

export const authGuard: CanDeactivateFn<unknown> = () => {
  const loginService: LoginService = inject(LoginService);
  if (loginService.isLogged()) {
    return true;
  }
  loginService.inviteToLogin();
  return false;
};
