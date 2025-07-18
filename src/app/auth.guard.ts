import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthgoogleService } from './authgoogle.service';
import { Profile } from './landingpage/profile.module';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthgoogleService = inject(AuthgoogleService)
  const router : Router = inject(Router)
  const loggedProfile: Profile = authService.getLoggedProfile()

  if(loggedProfile) {
    return true;
  }

  router.navigate([''])

  return false;
};
