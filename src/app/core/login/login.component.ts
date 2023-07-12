import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'ngsocial-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}
  @ViewChild('loginForm') loginForm!: FormGroup;

  email = '';
  password = '';

  existingUser: boolean = true;
  toogleExistenceUser() {
    this.existingUser = !this.existingUser;
  }

  login(): void {
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.loginForm.value);
  }
}
