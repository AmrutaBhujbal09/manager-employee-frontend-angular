import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AddEmployeeService} from '../add-employee.service';
import { EmployeePayload } from '../add-employee/employee-payload';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

//observalbe read response that is firstnam,last name  which are define in add-employee-payload.ts
//purposeof reating service is to write  logic of calling api from backend.
  addemp:Observable<Array<EmployeePayload>>;
  
  //addemptService.ts is used inside constructor beacuase inside that we write calling api logic from backend
  constructor(private addempService:AddEmployeeService,private router:Router,private localstorage:LocalStorageService) {

  }

  ngOnInit(): void {

  this.addempService.getEmpList().subscribe((res : any) =>{

    //to print all blogs on home page
    console.log(res);
    console.log("welcome to home page");
    this.addemp = res;
    }, error => {
    alert("Unable to fetch records");
    
    })
  }

  updateEmp(id) 
  {

  console.log('function gets called')
    localStorage.setItem('employee_id',id)  
  if (id)
    {

    this.router.navigateByUrl("/update-profile");
    // this.router.navigate(['/add-services'])
  
    }  
  }


  deleteEpm(id)
  {
    //let data=this.localstorage.retrieve('loginData');
    //console.log(data);
    var r=confirm("You are about to delte employee , are you sure?");
    if(r==true)
    {
      this.addempService.deleteUser(id).subscribe((res : any) =>{

          
          console.log(res);
          console.log("");
          alert('Employee Deleted Successfully  !!!')
          }, error => {
          alert("Unable to fetch records");
          
          })
    }   

    else{
      console.log("false")
    }
    
  }
}  
