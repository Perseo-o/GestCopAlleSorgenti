import { Component, OnInit, HostListener, OnDestroy, Input } from '@angular/core';
import { UserDTO } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Option, SearchRequest } from '../../../models/requestBody/searchRequest.model';

/**
 * Component responsible for displaying the home page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  @Input()
  text!:String;
  
  users: UserDTO[] = [];

  searchRequest: SearchRequest = {
    name: "",
    id: 0,
    option:Option.NAME,
    active: true
  }
  constructor(
    private userService:UserService
  ) {}

  /** Initializes the component. */
  ngOnInit(): void {
    this.SearchUsers();
  }

  SearchUsers() : any {
    
    this.userService.search(this.searchRequest).subscribe({
      next: (res) => {
      if(res){
        if(res){
          this.users = [];
          this.users = res;
        }
      }
      return this.users;
    }
      
  });
}
  
  

}