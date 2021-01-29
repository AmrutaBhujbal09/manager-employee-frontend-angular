import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEmployeeService } from '../add-employee.service';
import { LocalStorageService } from 'ngx-webstorage';
import { EmployeePayload} from './employee-payload';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addempForm:FormGroup;
  empPayload:EmployeePayload;

  constructor(private formBuilder: FormBuilder,private localStorage:LocalStorageService,private addemployeeService:AddEmployeeService,private router:Router) 
  {
    this.addempForm=this.formBuilder.group({
      
      //does the validation like required field validators,password mismatching validator, email validator.
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      address:['',[Validators.required]],
      dob:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required]],
      company:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city:['',[Validators.required]],
      //:['',[Validators.required]]

    });//group


    this.empPayload = {
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      dob:'',
      company:'',
      address:'',
      city:'',
      mobile:'',
      Status:'ACTIVE',
      manager_id:0
    }  
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.empPayload.email = this.addempForm.get('email').value;
    this.empPayload.first_name = this.addempForm.get('fname').value;
    this.empPayload.last_name = this.addempForm.get('lname').value;
    this.empPayload.password=this.addempForm.get('password').value;
    this.empPayload.company=this.addempForm.get('company').value;
    this.empPayload.mobile = this.addempForm.get('mobile').value;
    this.empPayload.Status='ACTIVE',
    this.empPayload.address = this.addempForm.get('address').value;
    this.empPayload.city = this.addempForm.get('city').value;
    this.empPayload.dob = this.addempForm.get('dob').value;
    this.empPayload.manager_id = this.localStorage.retrieve('loginData').id;
    
    console.log(this.empPayload);



    //call api here
    this.addemployeeService.addEmployee(this.empPayload).subscribe(data => {
      console.log(data);
      alert("Employee added successfully !!")
      this.router.navigateByUrl("/home");

    } ,error => {
      alert('Unsuccessfull');
    
    })
  }

}
