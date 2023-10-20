import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion des devoirs à rendre (Assignments)';
  opened = false;

  constructor(private authService:AuthService) {}

  ngOnInit(): void {
  }

  isLogged() {
    return this.authService.isLogged();
  }

  logout() {
    this.authService.logOut();
  }
}
