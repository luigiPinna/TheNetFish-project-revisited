import { LoginService } from 'src/app/services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-beta',
  templateUrl: './header-beta.component.html',
  styleUrls: ['./header-beta.component.css']
})
export class HeaderBetaComponent implements OnInit {

  isCollapsed = true;
  username:string;

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }

  toggleMenu()
  {
    this.isCollapsed = !this.isCollapsed;
  }

}
