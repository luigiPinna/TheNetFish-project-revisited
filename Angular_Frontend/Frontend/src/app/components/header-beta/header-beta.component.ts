import { TransferDataService } from './../../services/transfer-data/transfer-data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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

  title:string;

  constructor(public loginService:LoginService, private router : Router, private transferService: TransferDataService) { }

  ngOnInit(): void {

    this.username = sessionStorage.getItem('username');
  }
  isSearchMovieRoute(){
    return this.router.url === '/search-movie';
  }

  //burger menu appare al mobile use
  toggleMenu()
  {
    this.isCollapsed = !this.isCollapsed;
  }

  //Dialoga con il servizio trasferendogli il dato sul film cercato e apre la pagina searchfilm con l'input inserito
  goTosearchMovie(form:NgForm){
    this.title = form.form.value.title;
    this.transferService.setData(this.title); //trasferisce il dato al servizio transferData
    this.router.navigateByUrl('/search-movie'); //naviga nella pagina di indirizzamento
    console.log(this.title);
  }

 //Metodo che aggiorna la pagina
 reloadPage() {
  window.location.reload();
}


}
