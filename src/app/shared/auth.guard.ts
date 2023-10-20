import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Inject, inject } from '@angular/core';

export const AuthGuard:CanActivateFn = (route, state) => {
  
  // injection par programme (au lieu de le faire dans le constructeur d'un composant)
  let authService = inject(AuthService);
  let router = inject(Router);

  // si ça renvoie true alors on peut activer la route
  return authService.isAdmin()
  .then(authentifie => {
    if(authentifie) {
      console.log("vous êtes admin, navigation autorisée !")
      return true;
    } else {
      console.log("vous n'êtes pas admin, navigation refusée !")
      router.navigate(['/home']);
      return false;
    }
  });
}
