import { Component, OnInit } from '@angular/core';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  model: ILoginRequest = { username: '', password: '' };
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.model);
  }

}
