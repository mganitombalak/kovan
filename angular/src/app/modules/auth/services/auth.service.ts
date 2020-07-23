import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from '../../../core/models/ILoginRequest';
import { ILoginResponse } from '../../../core/models/ILoginResponse';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {

  onAuthStatusChanged: BehaviorSubject<boolean>;
  onAuthError: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.onAuthStatusChanged = new BehaviorSubject(this.isAuthenticated() || false);
    this.onAuthError = new BehaviorSubject(null);
  }

  login(loginRequest: ILoginRequest): void {
    const auth = this.httpClient.post('http://178.128.248.160:81/api/auth', JSON.stringify(loginRequest));
    auth.pipe(take(1)).subscribe((res: ILoginResponse) => {
      localStorage.setItem('user_data', JSON.stringify(res.data));
      localStorage.setItem('token', res.token);
      this.onAuthStatusChanged.next(true);
      this.router.navigate(['/']);
    }, e => this.onAuthError.next(e));
  }

  logout(): void {
    localStorage.clear();
    this.onAuthStatusChanged.next(false);
    this.router.navigate(['/auth']);
  }

  isAuthenticated = () => !!localStorage.getItem('token');
}
