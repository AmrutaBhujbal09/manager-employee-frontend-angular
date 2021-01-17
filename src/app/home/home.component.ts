import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AddEmployeeService} from '../add-employee.service';
import { EmployeePayload } from '../add-employee/employee-payload';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

//observalbe read response that is firstnam,last name  which are define in add-employee-payload.ts
//purposeof reating service is to write  logic of calling api from backend
  addemp:Observable<Array<EmployeePayload>>;
  
  //addemptService.ts is used inside constructor beacuase inside that we write calling api logic from backend
  constructor(private addempService:AddEmployeeService) {


    


   }

  ngOnInit(): void {
    //call to the getEmpList api on home page  which has logic inside geteMPtList() method insode add-employeeServics class which is inside add-employee.service.ts
    this.addempService.getEmpList().subscribe((res : any) =>{
      
      //to print all blogs on home page
      console.log(res);
      console.log("welcome to home page");
      this.addemp = res;
    }, error => {
      alert("Unable to fetch records");
    
    })


  }

}
