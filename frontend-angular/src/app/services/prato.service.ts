import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prato } from '../models/prato';

@Injectable({ providedIn: 'root' })
export class PratoService {
  private apiUrl = 'http://localhost:5278/api/pratos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Prato[]> {
    return this.http.get<Prato[]>(this.apiUrl);
  }

  getById(id: number): Observable<Prato> {
    return this.http.get<Prato>(`${this.apiUrl}/${id}`);
  }

  create(prato: Prato): Observable<Prato> {
    return this.http.post<Prato>(this.apiUrl, prato);
  }

  update(id: number, prato: Prato): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, prato);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
