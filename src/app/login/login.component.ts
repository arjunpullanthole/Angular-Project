import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private storage: StorageService, private loginserv: LoginService) { }
  input_firstname = '';
  input_password = '';
  login() {
    this.loginserv.onLogin(this.input_firstname, this.input_password).subscribe(v => {
      if (v.value) {
        alert("Login successful");
        this.router.navigate(['/main']);
      }
      else {
        alert("Invalid login");
      }
    })

  }
}
