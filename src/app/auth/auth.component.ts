import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router'; 
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username:string = "";
  password:string = "";

  constructor(private authService:AuthService, private router:Router, 
      private notificationService: NotificationService) {}

  ngOnInit(): void {
  }

  authentification() {
    if (this.authService.loggedIn) {
      this.authService.logOut();
      this.router.navigate(['/home']);
    } else if (this.authService.logIn(this.username, this.password)) {
      this.router.navigate(['/home']);
      // notification pour afficher un message
      this.notificationService.show('Vous êtes bien connecter.');
      console.log("Vous êtes connecté !");
    } else {
      alert("Identifiant ou mot de passe incorrect");
    }
  }  

}
