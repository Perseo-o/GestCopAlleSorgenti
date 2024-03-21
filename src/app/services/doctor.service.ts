import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { DoctorDTO } from '../models/doctor.model';

@Injectable({ providedIn: 'root' })
export class DoctorService extends AbstractService<DoctorDTO>{
  
  constructor(http: HttpClient) {
    super(http);
    this.type = 'doctor/';
    this.baseUrl += this.type;
  }


  
}
