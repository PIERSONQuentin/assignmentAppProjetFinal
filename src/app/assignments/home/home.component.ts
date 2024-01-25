import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.authService.isLogged();
  }

  isAdmin() {
    let role = this.authService.getCurrentUserRole();

    if(role == 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
