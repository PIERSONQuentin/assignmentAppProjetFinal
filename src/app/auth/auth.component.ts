import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username:string = "";
  password:string = "";

  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
  }

  authentification() {
    if (this.authService.loggedIn) {
      this.authService.logOut();
      this.router.navigate(['/home']);
    } else if (this.authService.logIn(this.username, this.password)) {
      this.router.navigate(['/home']);
      console.log("Vous êtes connecté !");
    } else {
      alert("Identifiant ou mot de passe incorrect");
    }
  }  

}
