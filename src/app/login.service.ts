import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage:StorageService) { }


  onLogin(username: string,pwd:string)
  {
    if(username === "Arjun" && pwd === "1234")
    {
      this.storage.changeAuth();
    }
    return of(this.storage.auth);
  }

}
