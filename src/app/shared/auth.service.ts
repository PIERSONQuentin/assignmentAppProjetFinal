import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  currentUser = null; 

  users = {
    admin: {username: 'admin', password: 'admin123', role: 'admin'},
    user: {username: 'user', password: 'user123', role: 'user'}
  };

  logIn(username:string, password:string) {
    const user = this.users[username];
    console.log(user);
    if (user && user.password === password) {
      this.loggedIn = true;
      this.currentUser = user;
      return true;
    }
    return false;
  }  

  logOut() {
    this.loggedIn = false;
  }
  
  isAdmin() {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn && this.getCurrentUserRole() === 'admin');
      }, 800);
    });
  }

  isLogged() {
    return this.loggedIn;
  }

  getCurrentUserRole() {
    if (this.loggedIn) {
      return this.currentUser ? this.currentUser.role : 'user';
    }
    return 'user'; // Valeur par défaut si l'utilisateur n'est pas connecté.
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
