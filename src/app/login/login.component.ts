import { Component } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login() {
    console.log('Login button clicked');
    this.authenticationSuccess();
  }
  authenticationSuccess() {
    console.log('Authentication successful');
  }
  authenticationFailure() {
    console.log('Authentication failed');
  }
}
