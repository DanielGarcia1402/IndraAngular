import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './empresa-modelo';

@Injectable()
export class empresaService {
    
    domain: string = 'http://localhost:3000';
    // domain: string = 'www.mydomainapi.com/';

  constructor(private http: HttpClient) {
  }
  
  getRols() {
    return this.http.get<Empresa[]>(`${this.domain}/api/empresa`);
  }

  getRolsById(sendRol) {
    return this.http.get<Empresa[]>(`${this.domain}/api/empresa/${sendRol}`);
  }
 
  addRol(sendRol) {
    return this.http.post<Empresa>(`${this.domain}/api/empresa`, sendRol);
  }

  deleteRol(id) {
    return this.http.delete<Empresa>(`${this.domain}/api/empresa/${id}`);
  }

  updateRol(sendRol) {
    return this.http.put<Empresa>(`${this.domain}/api/empresa/${sendRol._id}`, sendRol);
  }

  /* deleteRol(id) {
    return this.http.delete<Clientes>(`${this.domain}/api/clientes/${id}`)
      .map(res => res);
  } */
   
}
