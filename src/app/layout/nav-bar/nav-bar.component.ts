import { Component,  OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements  OnInit {

  constructor(
    protected router: Router
  ) {
  }

  /** Initializes the component */
  ngOnInit(): void {
    this.searchbbarWidthSetter();

  }


  searchbbarWidthSetter(){
    const component = document.getElementById("nomeAzienda");
    const companyNameWidth = component ? component.offsetWidth : null;
    document.documentElement.style.setProperty('--company-name-width', companyNameWidth + "px");
  }

  goToDetail() {
    this.router.navigate(['GestCopAlleSorgenti/home']);
  }
}