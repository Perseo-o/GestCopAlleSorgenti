import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ImageService {
  private readonly baseUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}${environment.port}${environment.apiVersion}image/`;
  }

  create(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(`${this.baseUrl}createImg`, formData);
  }

  fileSistem(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}fileSystem?id=${id}`);
  }

  read(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}read?id=${id}`);
  }

  readLast(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}readLast`);
  }
}
