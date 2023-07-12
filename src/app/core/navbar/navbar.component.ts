import { Component } from '@angular/core';

@Component({
  selector: 'ngsocial-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  loginIsVisible: boolean = false;

  showLogin() {
    this.loginIsVisible = !this.loginIsVisible;
  }
}
