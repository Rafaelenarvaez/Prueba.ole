import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomRp   } from '../schemas/frase';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getFrases(): Observable<RandomRp> {
    return this.http.get<any>('https://api.adviceslip.com/advice');
  }
}
