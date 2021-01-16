import { Component, OnInit } from '@angular/core';
import {RegisterPayload} from '../register/register-payload';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  registerPayload:RegisterPayload;

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) 
  {
    this.registerForm=this.formBuilder.group({
      
      //does the validation like required field validators,password mismatching validator, email validator.
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      address:[''],
      dob:[''],
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required]],
      company:['']

    }); //group
      
    
    this.registerPayload = {
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      dob:'',
      company:'',
      username:'',
      address:'',
    }  
  
  } //constructor

  ngOnInit(): void {
  }

  onSubmit() {

    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.first_name = this.registerForm.get('fname').value;
    this.registerPayload.last_name = this.registerForm.get('lname').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.address = this.registerForm.get('address').value;
    this.registerPayload.dob = this.registerForm.get('dob').value;
    this.registerPayload.company = this.registerForm.get('company').value;
    this.registerPayload.username = this.registerForm.get('username').value;

    console.log(this.registerPayload);
    //log() to print data on console
    
    this.authService.register(this.registerPayload).subscribe(data => {

      alert("welcome user  register successfully.now go to login page");
      console.log(data);
      this.router.navigateByUrl("/register-success");
    } , error => {
      alert('Unsuccessfull');
    });
  } //onSubmit()


}//class
