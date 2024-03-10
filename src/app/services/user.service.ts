import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/user.model';
import { SearchRequest } from '../models/requestBody/searchRequest.model';

@Injectable({ providedIn: 'root' })
export class UserService extends AbstractService<UserDTO>{
  
  constructor(http: HttpClient) {
    super(http);
    this.type = 'user/';
    this.baseUrl += this.type;
  }


  
  search(req: SearchRequest): Observable<UserDTO[]> {
    return this.http.post<UserDTO[]>(`${this.baseUrl}search`, req);
  }
}
