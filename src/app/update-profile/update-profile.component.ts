/*import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  RegisterPayload } from '../auth/register/Register-Payload';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import {AddEmployeeService} from '../add-employee.service'
import { LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';
import { EmployeePayload} from '../add-employee/employee-payload';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateprofileForm:FormGroup;
  updatePayload: EmployeePayload
  id:number;
  constructor(private localStorage:LocalStorageService,private formBuilder:FormBuilder,private addempService:AddEmployeeService)
  {
    this.updatePayload= {
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      dob:'',
      address:'',
      city:'',
      manager_id:0,
      mobile:'',
      company:null,
      Status:'',
      username:''
    
    }
  }
  ngOnInit(): void {
    let localData = this.localStorage.retrieve('loginData');
    this.id = localData.id;
    
    
    this.updateprofileForm=this.formBuilder.group({
      fname:[localData.first_name,[Validators.required]],
      lname:[localData.last_name,[Validators.required]],
      //cell:[localData.mobile,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address:[localData.address],
      company:[localData.company],
      city:[localData.city],
      username:[localData.username,[Validators.required]],
      email:[localData.email,[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],

  
    });
  }

  onSubmit() {
    //this.updatePayload.id = this.updateprofileForm.get('email').value;
    this.updatePayload.email = this.updateprofileForm.get('email').value;
    this.updatePayload.first_name = this.updateprofileForm.get('fname').value;
    this.updatePayload.last_name = this.updateprofileForm.get('lname').value;
    //this.updatePayload.mobile = this.updateprofileForm.get('mobile').value;
    this.updatePayload.address = this.updateprofileForm.get('address').value;
    this.updatePayload.username = this.updateprofileForm.get('username').value;
    this.updatePayload.company = this.updateprofileForm.get('company').value;
    this.updatePayload.dob = this.updateprofileForm.get('dob').value;
  

    this.addempService.updateProfile(this.updatePayload,this.id).subscribe(data => {
      alert("User updated successfully")
      console.log("welcome");
    } , error =>{
      alert('an error occurred');
    });
  }

}*/ 