import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:String;

  constructor(private router:Router) {
    this.user = localStorage.getItem('player');
   }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('player');
    this.router.navigateByUrl('/');
  }

}
