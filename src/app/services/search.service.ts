import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Option, SearchRequest } from '../models/requestBody/searchRequest.model'; // Importa il tipo di dati SearchRequest

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValueSubject = new BehaviorSubject<SearchRequest>({ name: '', id: 0, option: Option.NAME, active: false });
  searchValue$ = this.searchValueSubject.asObservable();

  constructor() {}

  updateSearchValue(value: SearchRequest) {
    this.searchValueSubject.next(value);
  }
}
