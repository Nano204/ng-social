import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'ngsocial-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private loginService: LoginService) {}

  loginIsVisible: boolean = false;
  isLogged = this.loginService.isLogged();
  loggedUser = this.loginService.getLoggedUsername();

  showLogin() {
    this.loginIsVisible = !this.loginIsVisible;
  }

  updateLogStatus() {
    this.loggedUser = this.loginService.getLoggedUsername();
    this.isLogged = this.loginService.isLogged();
    this.loginIsVisible = this.isLogged ? false : this.loginIsVisible;
  }

  logout() {
    this.loginService.logout();
    this.updateLogStatus();
  }
}
