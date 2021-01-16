import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {EmployeePayload } from './add-employee/employee-payload';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private httpClient :HttpClient)
  {
    
  
  }
  private baseUrl ="http://localhost:8000/";

  /*getPostList(getBlogPayload:EmployeePayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'api/blog/getBlogList', getBlogPayload , { headers:headers });
  }*/

  addEmloyee(empPayload:EmployeePayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'employee/add',empPayload, { headers:headers });

  }

  getEmployeeList():Observable<any>{
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get(this.baseUrl + 'employee/getEmployee' ,{ headers:headers })     

  }


}
