import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agente } from './agente-modelo';
import { Empresa } from '../empresa/empresa-modelo';

@Injectable()
export class agenteService {
    
    domain: string = 'http://localhost:3000';
    // domain: string = 'www.mydomainapi.com/';

  constructor(private http: HttpClient) {
  }
  
  getRols() {
    return this.http.get<Agente[]>(`${this.domain}/api/agente`);
  }

  getEmpresas() {
    return this.http.get<Empresa[]>(`${this.domain}/api/empresa`);
  }

  getRolsById(sendRol) {
    return this.http.get<Agente[]>(`${this.domain}/api/agente/${sendRol}`);
  }
 
  addRol(sendRol) {
    return this.http.post<Agente>(`${this.domain}/api/agente`, sendRol);
  }

  deleteRol(id) {
    return this.http.delete<Agente>(`${this.domain}/api/agente/${id}`);
  }

  updateRol(sendRol) {
    return this.http.put<Agente>(`${this.domain}/api/agente/${sendRol._id}`, sendRol);
  }

  /* deleteRol(id) {
    return this.http.delete<Clientes>(`${this.domain}/api/clientes/${id}`)
      .map(res => res);
  } */
   
}
