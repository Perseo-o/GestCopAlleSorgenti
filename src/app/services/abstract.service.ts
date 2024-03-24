import { Service } from './service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviroment';

export abstract class AbstractService<DTO> implements Service<DTO> {
    type: string = "";
    baseUrl: string = environment.apiUrl + environment.port + environment.apiVersion;

   
    constructor(protected http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get<any> (`${this.baseUrl}getAll`);
    }

    create(dto: DTO): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}create`, dto);
    }

    read(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}read?id=` + id);
    }

    update(dto: DTO): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}update`, dto);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}delete?id=` + id);
    }
}
