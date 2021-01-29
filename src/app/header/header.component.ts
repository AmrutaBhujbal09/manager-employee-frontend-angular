import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService : AuthService,private router : Router , private localStorage : LocalStorageService)
  {

  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/home") ;
  }

  ngOnInit(): void {
  }

 

  

}
