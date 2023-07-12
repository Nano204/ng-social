import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @Output() loginEvent = new EventEmitter();

  username = '';
  password = '';
  existingUser: boolean = true;

  toogleExistenceUser() {
    this.existingUser = !this.existingUser;
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    if (this.existingUser) {
      const loginSubscription = this.loginService
        .login(this.loginForm.value)
        .subscribe(() => {
          this.loginEvent.emit();
        });
    } else {
      this.loginService.singup(this.loginForm.value).subscribe(() => {
        this.loginService.login(this.loginForm.value).subscribe(() => {
          this.loginEvent.emit();
        });
      });
    }
  }
}
