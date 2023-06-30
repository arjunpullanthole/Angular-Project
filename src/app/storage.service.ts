import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  public auth = new BehaviorSubject<boolean>(false);

  public changeAuth()
  {
    this.auth.next(!this.auth.getValue());
  }
  public setAuth(val:boolean)
  {
    this.auth.next(val);
  }
  public getAuth()
  {
    return this.auth.value;
  }
}
