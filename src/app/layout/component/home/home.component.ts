import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SearchService } from '../../../services/search.service'; // Importa il servizio di ricerca
import { UserDTO } from '../../../models/user.model';
import { Option, SearchRequest } from '../../../models/requestBody/searchRequest.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: UserDTO[] = [];

  searchRequest: SearchRequest = {
    name: "",
    id: 0,
    option: Option.NAME,
    active: false
  };

  constructor(
    private userService: UserService,
    private searchService: SearchService // Inietta il servizio di ricerca
  ) {}

  ngOnInit(): void {
    this.searchService.searchValue$.subscribe(searchRequest => {
      // Ogni volta che il valore di ricerca cambia, esegui la ricerca degli utenti
      this.searchRequest = searchRequest;
      this.searchUsers();
    });
  }


  searchUsers(): void {
    this.userService.search(this.searchRequest).subscribe({
      next: (res: UserDTO[]) => {
        if (res) {
          this.users = res;
        }
      },
      error: (error: any) => {
        console.error('Error fetching users:', error);
      }
    });
  }
}
