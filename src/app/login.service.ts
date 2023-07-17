import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { of } from 'rxjs';


const users = [
  { id: 1, username: 'admin', password: 'admin', role: 'Admin' },
  { id: 2, username: 'Arjun', password: '1234', role: 'User' }
];

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private storage:StorageService) { }


  onLogin(username: string,pwd:string)
  {
    const user = users.find(x => x.username === username && x.password === pwd);
    if (user)
    {  
      this.storage.changeAuth();
      this.storage.setrole(user.role);
      this.storage.setmode(user.role);
    }
    return of(this.storage.isAuth());
  }

}
