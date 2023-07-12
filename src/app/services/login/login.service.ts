import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, map } from 'rxjs';

type UserData = { username: string; password: string };
type LoginResponse = { access_token: string };

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  @Output() notLoggedAction = new EventEmitter();
  constructor(private http: HttpClient) {}
  private host = 'http://localhost:3000';

  login(requestInfo: UserData): Observable<unknown> {
    return this.http
      .post<LoginResponse>(`${this.host}/auth/login`, requestInfo)
      .pipe(
        map((response: LoginResponse) => {
          localStorage.setItem('access_token', response?.access_token);
          localStorage.setItem('username', requestInfo.username);
        })
      );
  }

  singup(requestInfo: UserData): Observable<unknown> {
    return this.http.post<unknown>(`${this.host}/auth/signup`, requestInfo);
  }

  getAuthToken() {
    return localStorage.getItem('access_token');
  }

  getLoggedUsername() {
    return localStorage.getItem('username');
  }

  isLogged() {
    return !!localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
  }

  inviteToLogin() {
    this.notLoggedAction.emit()
  }
}
