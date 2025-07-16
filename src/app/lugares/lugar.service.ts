import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(
    private http: HttpClient
  ) { }

  createLugar(lugar: Lugar) : Observable<Lugar>{
    return this.http.post<Lugar>('http://localhost:3000/lugares', lugar)
  }

  getLugares() : Observable<Lugar[]> {
    return this.http.get<Lugar[]>('http://localhost:3000/lugares')
  }

  filterLugares(nome: string, categoria: string) : Observable<Lugar[]> {
    let parametros = new HttpParams()

    if(nome) {
      parametros = parametros.set('nome_like', nome)
    }

    if(categoria && categoria !== '0') {
      parametros = parametros.set('categoria', categoria)
    }

    return this.http.get<Lugar[]>('http://localhost:3000/lugares', {
      params: parametros
    })
  }
}

