import { Service } from './service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/enviroments';

/**
 * Abstract class for defining CRUD operations on a resource.
 * @template DTO The Data Transfer Object representing the resource.
 */
export abstract class AbstractService<DTO> implements Service<DTO> {
    type: string = "";
    baseUrl: string = environment.apiUrl + environment.port + environment.apiVersion;

    /**
     * Constructs an instance of AbstractService.
     * @param {HttpClient} http The Angular HttpClient for making HTTP requests.
     */
    constructor(protected http: HttpClient) {
    }

    /**
     * Retrieves all resources of the specified type.
     * @returns {Observable<any>} An Observable emitting an array of DTOs.
     */
    getAll(): Observable<any> {
        return this.http.get<any> (`${this.baseUrl}getAll`);
    }

    /**
     * Creates a new resource.
     * @param {DTO} dto The DTO representing the resource to be created.
     * @returns {Observable<any>} An Observable indicating the success or failure of the operation.
     */
    create(dto: DTO): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}create`, dto);
    }

    /**
     * Retrieves a single resource by its ID.
     * @param {number} id The ID of the resource to retrieve.
     * @returns {Observable<any>} An Observable emitting the DTO representing the retrieved resource.
     */
    read(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}read?id=` + id);
    }

    /**
     * Updates an existing resource.
     * @param {DTO} dto The DTO representing the updated resource.
     * @returns {Observable<any>} An Observable emitting the DTO representing the updated resource.
     */
    update(dto: DTO): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}update`, dto);
    }

    /**
     * Deletes a resource by its ID.
     * @param {number} id The ID of the resource to delete.
     * @returns {Observable<any>} An Observable indicating the success or failure of the operation.
     */
    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}delete?id=` + id);
    }

}
