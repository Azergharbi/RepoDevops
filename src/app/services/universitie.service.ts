import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universitie } from '../model/Universitie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversitieService {

  private baseUrl = 'http://192.168.1.144:8089/Kaddem/universite';

  constructor(private http: HttpClient) { }

  createUniversitie(universitie: Universitie): Observable<Universitie> {
    const url = `${this.baseUrl}/add-universite`;
    return this.http.post<Universitie>(url, universitie);
  }


  getAllUniversities(): Observable<Universitie[]> {
    const url = `${this.baseUrl}/retrieve-all-universites`;
    return this.http.get<Universitie[]>(url);
  }
}
    