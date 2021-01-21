import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cidade } from '../models/cidade.model';

@Injectable({
  providedIn: 'root'
})

export class CidadesService {

  httpOtions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  listarCidades(): Observable<any>{
    const cidadesUrl = "https://rpmshegoapp.herokuapp.com/cidades"
    const url = "https://jsonplaceholder.typicode.com/posts"
    return this.httpClient.get<any>(cidadesUrl);
  }
}
