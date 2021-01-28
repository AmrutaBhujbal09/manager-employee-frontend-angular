import { Injectable } from '@angular/core';
import { LoginPayload } from './auth/login/login-payload';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import {RegisterPayload} from './auth/register/register-payload';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl ="http://localhost:8000/"; 

  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) {
    
  }

  //login aoi call
  login(loginPayload:LoginPayload):Observable<boolean> {
    let headers :HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.post(this.baseurl +'manager/signin',loginPayload, {headers:headers}).pipe(map(data =>{
      this.localStorageService.store('loginData',data);
      return true;
  
    }));
  }



 //isAuthenticated() method to check whether user has logged in or not
  isAuthenticated():boolean{
    return this.localStorageService.retrieve('loginData') !=null;
  }



   //register api call
  register(registerPayload:RegisterPayload): Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/JSON'});
    return this.httpClient.post(this.baseurl + 'manager/signup',registerPayload, {headers:headers});
  }

    
  


}
