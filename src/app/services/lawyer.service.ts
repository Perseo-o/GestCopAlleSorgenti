import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { LowyerDTO } from '../models/lowyer.model';

@Injectable({ providedIn: 'root' })
export class lawyerService extends AbstractService<LowyerDTO>{
  
  constructor(http: HttpClient) {
    super(http);
    this.type = 'lowyer/';
    this.baseUrl += this.type;
  }


  
}
