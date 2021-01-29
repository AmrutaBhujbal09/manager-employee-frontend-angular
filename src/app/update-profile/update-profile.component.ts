import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  RegisterPayload } from '../auth/register/Register-Payload';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import {AddEmployeeService} from '../add-employee.service'
import { LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';
import { EmployeePayload} from '../add-employee/employee-payload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateprofileForm:FormGroup;
  updatePayload: Employee
  id:number;

  addemp:Observable<Array<EmployeePayload>>;
  constructor(private localStorage:LocalStorageService,private formBuilder:FormBuilder,
    private addempService:AddEmployeeService, private router:Router)

    //intialises updatePayload 
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
      username:'',
      Status:''
    
    }
  }
  ngOnInit(): void {
    let localData = this.localStorage.retrieve('loginData');
    this.id = Number(localStorage.getItem('employee_id'))


    this.getEmp()
    
    if(localStorage.getItem('employee_id') == null){
      this.router.navigate(['/'])
    }



    console.log('this.id----------', this.id)
    
    this.updateprofileForm=this.formBuilder.group({
      fname:[this.updatePayload.first_name,[Validators.required]],
      lname:[this.updatePayload.last_name,[Validators.required]],
      //cell:[localData.mobile,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address:[this.updatePayload.address],
      company:[this.updatePayload.company],
      dob:[this.updatePayload.dob],
      mobile:[localData.mobile,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city:[this.updatePayload.city],
      username:[this.updatePayload.username,[Validators.required]],
      password:[this.updatePayload.password],
      email:[this.updatePayload.email,[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],

  
    });

   
  }



  getEmp(){

    this.addempService.getEmpById(this.id).subscribe((res : any) =>{
  
      //to print all blogs on home page
      console.log(res);
      this.updatePayload = res[0];
      
      this.updateprofileForm=this.formBuilder.group({
        fname:[this.updatePayload.first_name,[Validators.required]],
        lname:[this.updatePayload.last_name,[Validators.required]],
        //cell:[localData.mobile,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        address:[this.updatePayload.address],
        company:[this.updatePayload.company],
        dob:[this.updatePayload.dob],
        mobile:[this.updatePayload.mobile],
        city:[this.updatePayload.city],
        username:[this.updatePayload.username,[Validators.required]],
        password:[this.updatePayload.password],
        email:[this.updatePayload.email,[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
  
    
      });
     
      }, error => {
      alert("Unable to fetch records");
      
      })
  }




//Data binding i.e all data have taken from form & put it in payload to sent these data to backend.
  onSubmit() {

    //this.updatePayload.id = this.updateprofileForm.get('email').value;
    this.updatePayload.email = this.updateprofileForm.get('email').value;
    this.updatePayload.first_name = this.updateprofileForm.get('fname').value;
    this.updatePayload.last_name = this.updateprofileForm.get('lname').value;
    this.updatePayload.mobile = this.updateprofileForm.get('mobile').value;
    this.updatePayload.address = this.updateprofileForm.get('address').value;
    this.updatePayload.username = this.updateprofileForm.get('username').value;
    this.updatePayload.company = this.updateprofileForm.get('company').value;
    this.updatePayload.dob = this.updateprofileForm.get('dob').value;
  

    this.addempService.updateProfile(this.updatePayload,this.id).subscribe(data => {
      alert("Employee updated successfully")
      this.router.navigateByUrl("/home");
      console.log("welcome");
    } , error =>{
      alert('an error occurred');
    });
  }

}



export class Employee
{
    email:String;
    password:String;
    username:String;
    first_name:String;
    last_name:String;
    company:String;
    address:String;
    dob:String;
    city:String;
    mobile:String;
    Status:String;
    manager_id:number;

}
