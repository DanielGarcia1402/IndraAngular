import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './cliente-modelo';

@Injectable()
export class clientesService {
    
    domain: string = 'http://localhost:3000';
    // domain: string = 'www.mydomainapi.com/';

  constructor(private http: HttpClient) {
  }
  
  getRols() {
    return this.http.get<Clientes[]>(`${this.domain}/api/clientes`);
  }

  getRolsById(sendRol) {
    return this.http.get<Clientes[]>(`${this.domain}/api/clientes/${sendRol}`);
  }
 
  addRol(sendRol) {
    return this.http.post<Clientes>(`${this.domain}/api/clientes`, sendRol);
  }

  deleteRol(id) {
    return this.http.delete<Clientes>(`${this.domain}/api/clientes/${id}`);
  }

  updateRol(sendRol) {
    return this.http.put<Clientes>(`${this.domain}/api/clientes/${sendRol._id}`, sendRol);
  }

  /* deleteRol(id) {
    return this.http.delete<Clientes>(`${this.domain}/api/clientes/${id}`)
      .map(res => res);
  } */
   
}
