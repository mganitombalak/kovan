import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit,OnInit, OnDestroy {

  isAuthenticated = false;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authService.onAuthStatusChanged.subscribe(r => this.isAuthenticated = r);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.authService.onAuthStatusChanged.unsubscribe();
  }

  onLoginLogout(): void {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
    } else {
      this.router.navigate(['/auth']);
    }
  }

}
