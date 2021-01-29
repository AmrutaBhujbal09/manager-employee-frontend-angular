//Angular Services is a stateless object and provide very useful functions.Thses functions can be invoked from any component of Angular.
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EmployeePayload } from './add-employee/employee-payload';


import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private httpClient :HttpClient)
  {
    
  
  }
  private baseUrl ="http://localhost:8000/";

  getEmpList():Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get(this.baseUrl + 'employee/getEmployee', { headers:headers });
  }

  //call to addEmployee api.
  addEmployee(empPayload:EmployeePayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'employee/add',empPayload, { headers:headers });
  }  

    getEmpById(id:number):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get(this.baseUrl + 'employee/getEmpDetails/' + id , { headers:headers });

  }

//call to Update Employee api.
  updateProfile(updatePayload,id:Number):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });
    return this.httpClient.put(this.baseUrl + 'employee/updateEmp/' + id,updatePayload ,{headers:headers});
    
  }

  //delete user
  deleteUser(id:Number)
  {
    let headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.delete(this.baseUrl + 'employee/deleteEmp/' + id ,{headers : headers});
  }

}
