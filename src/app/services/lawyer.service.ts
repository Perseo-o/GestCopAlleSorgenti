import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { LawyerDTO } from '../models/lawyer.model';

@Injectable({ providedIn: 'root' })
export class LawyerService extends AbstractService<LawyerDTO>{
  
  constructor(http: HttpClient) {
    super(http);
    this.type = 'lawyer/';
    this.baseUrl += this.type;
  }


  
}
