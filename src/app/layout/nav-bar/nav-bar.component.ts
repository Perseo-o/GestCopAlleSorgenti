import { Component,  OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Option, SearchRequest } from '../../models/requestBody/searchRequest.model';
import { SearchService } from '../../services/search.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements  OnInit {

  selectedChoice!: string;

  searchValue: any = null;

  searchRequest: SearchRequest = {
    name: this.searchValue,
    id: 0,
    option:Option.NAME,
    active: false
  }

  constructor(
    protected router: Router,
    private searchService: SearchService // Inietta il servizio di ricerca
  ) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['GestCopAlleSorgenti/home']);
  }

  goToAdd(){
    this.router.navigate(['GestCopAlleSorgenti/add-user']);
  }

  updateSearchValue(value: string) {
    if(this.searchRequest.option==Option.NAME){
      this.searchRequest.id=0;
      if(value!=null){
        this.searchRequest.name=value;
      }else{
        this.searchRequest.name='';
      }
    }else{
      this.searchRequest.name='';
      if(value!=null&&value!=''){
        this.searchRequest.id=parseInt(value);
      }else{
        this.searchRequest.id=0;
      }
    }

    this.searchService.updateSearchValue(this.searchRequest); // Aggiorna il valore di ricerca tramite il servizio
  }

  selectChoice(choice: string) {
    this.selectedChoice = choice;
    switch(choice){
      case '0':
        this.searchRequest.option=Option.NAME;
        this.searchRequest.active=false;
      break;
      case '1':
        this.searchRequest.option=Option.ID;
        this.searchRequest.active=false;
      break;
      case '2':
        this.searchRequest.option=Option.NAME;
        this.searchRequest.active=false;
      break;
      case '3':
        this.searchRequest.option=Option.ID;
        this.searchRequest.active=true;
      break;
      case '4':
        this.searchRequest.option=Option.NAME;
        this.searchRequest.active=true;
      break;
    }
    this.updateSearchValue(this.searchRequest.name);
  }
}