import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  public auth = new BehaviorSubject<boolean>(false);
  public role = new BehaviorSubject<string>("User");
  public mode = new BehaviorSubject<string>("User");

  public setrole(val:string)
  {
    this.role.next(val);
  }
  public getrole()
  {
    return this.role.value;
  }

  public setmode(val:string)
  {
    this.mode.next(val);
  }
  public getmode()
  {
    return this.mode.value;
  }

  public togglemode()
  {
    var val: string = this.getmode()==="User" ? "Admin" : "User";
    this.setmode(val);
  }

  public changeAuth()
  {
    this.auth.next(!this.auth.getValue());
  }
  public setAuth(val:boolean)
  {
    this.auth.next(val);
  }
  public isAuth()
  {
    return this.auth.value;
  }
}
