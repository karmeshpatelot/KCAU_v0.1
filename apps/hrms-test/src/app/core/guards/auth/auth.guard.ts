import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const isLoggedIn = false;

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  let er_no = localStorage.getItem('er_no');
  if (er_no) {
    return true;
  }else{
    router.navigate(['auth/login']);
    return false;
  }
  
};