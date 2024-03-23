import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private resetFormSubject = new BehaviorSubject<boolean>(false);
  resetForm$ = this.resetFormSubject.asObservable();

  constructor() { }

  resetForm() {
    this.resetFormSubject.next(true);
  }
}
