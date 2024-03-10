import { Observable } from 'rxjs';

export interface Service<DTO> {

    getAll(): Observable<any>;

    create(dto: DTO): Observable<any>;

    read(id: number): Observable<any>;

    update(dto: DTO): Observable<any>;

    delete(id: number): Observable<any>;
}