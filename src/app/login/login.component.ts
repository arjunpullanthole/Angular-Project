import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private storage: StorageService, private loginserv: LoginService) { }
  input_username = '';
  input_password = '';
  hide = true;
  login() {
    this.loginserv.onLogin(this.input_username, this.input_password).subscribe(v => {
      if (v) {
        alert("Login successful");
        this.router.navigate(['/main']);
      }
      else {
        alert("Invalid login");
      }
    })
  }
}
