import { Component,  OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Option, SearchRequest } from '../../models/requestBody/searchRequest.model';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements  OnInit {

  searchValue: any = null;

  searchRequest: SearchRequest = {
    name: this.searchValue,
    id: 0,
    option:Option.NAME,
    active: true
  }
  
  constructor(
    protected router: Router
  ) {
  }

  /** Initializes the component */
  ngOnInit(): void {
    
    
  }

  goHome() {
    this.router.navigate(['GestCopAlleSorgenti/home']);
  }



  goToAdd(){
    this.router.navigate(['GestCopAlleSorgenti/add-user']);
  }
}