import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private http: HttpClient) { }
  private auth = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<string>("User");
  private mode = new BehaviorSubject<string>("User");
  public darktheme = new BehaviorSubject<boolean>(false);
  submissionUrl = "http://localhost:8080/submission";

  public getSubmission(): Observable<any> {
    const url = this.submissionUrl;
    return this.http.get<any>(url); 
  }

  public postSubmission(data:any): Observable<any> {
    const url = this.submissionUrl+'/data';
    return this.http.post<any>(url,data);
  }

  public putSubmission(data:any): Observable<any> {
    const url = this.submissionUrl+'/data';
    return this.http.put<any>(url,data);
  }

  public deleteSubmission(data:any): Observable<any> {
    const url = this.submissionUrl+'/'+data.id;
    return this.http.delete<any>(url);
  }

  public toggletheme()
  {
    this.darktheme.next(!this.darktheme.getValue());
  }

  public gettheme()
  {
    return this.darktheme.value;
  }

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
    var val: string = this.mode.value==="User" ? "Admin" : "User";
    this.setmode(val);
  }

  public changeAuth()
  {
    this.auth.next(!this.auth.getValue());
  }

  public isAuth()
  {
    return this.auth.value;
  }
}
