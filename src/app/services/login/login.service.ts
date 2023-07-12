import { Injectable } from '@angular/core';

type LoginInfo = { email: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(requestInfo: LoginInfo) {
    console.log(requestInfo);
  }
}
