import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
/* import { CidadeModel } from '../../app/modules/list-pontos/cidade.model'; */

@Injectable({
  providedIn: 'root'
})

export class CidadesService {

  cidadesUrl = 'https://rpmshegoapp.herokuapp.com/cidades';

  constructor(private http: HttpClient) { }

  listarCidades(): Observable<any>{
    /* return this.http.get(""); */
    return this.http.get(this.cidadesUrl).pipe(map(res => res));
  }
}
