import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { Person } from '../models/person.interface';

@Injectable({
  providedIn: 'root'
})

export class RestSolicitudService {
  constructor(private http: HttpClient) { }

  GuardarUsuario(usuario: User) {
    return this.http.post('http://172.31.18.97:8080', usuario);
  }

  ObtenerPersonajes() {
    return this.http.get('https://swapi.co/api/people');
  }

  ObtenerDetalle(personaje: Person) {
    return this.http.get(personaje.url);
  }
}
