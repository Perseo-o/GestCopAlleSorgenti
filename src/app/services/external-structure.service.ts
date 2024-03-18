import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { ExternalStructureDTO } from '../models/externalStructure.model';

@Injectable({ providedIn: 'root' })
export class ExternalStructureService extends AbstractService<ExternalStructureDTO>{
  
  constructor(http: HttpClient) {
    super(http);
    this.type = 'externalStructure/';
    this.baseUrl += this.type;
  }


  
}
