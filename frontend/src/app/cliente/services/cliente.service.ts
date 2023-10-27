import { Injectable } from '@angular/core';
import { Cliente } from "../../shared/models/cliente.model";
import { Observable } from "rxjs";
import { PageRequest } from "../../shared/models/page-request.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = `${environment.api}/clientes`;

  constructor(
    private httpClient: HttpClient
  ) { }

  listarTodos(): Observable<Cliente> {
    return this.httpClient.get<any>(this.url);
  } 

  listarTodosPaginado(size: number, page: number, valueSearch: string): Observable<PageRequest<Cliente>> {
    const options = {
      params: new HttpParams()
        .set('size', size)
        .set('page', page)
        .set('name', valueSearch)
    };
    return this.httpClient.get<any>(this.url, options);
  } 

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.url, cliente);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    const url = `${this.url}/${cliente.idCliente}`
    return this.httpClient.put<Cliente>(url, cliente)
  }

  remover(id: number): Observable<Cliente> {
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<Cliente>(url);
  }

  buscarPorId(id: number): Observable<Cliente> {
    const url = `${this.url}/${id}`
    return this.httpClient.get<Cliente>(url)
  }

  buscarPorCpf(cpf: string): Observable<Cliente> {
    const url = `${this.url}/${cpf}`
    return this.httpClient.get<Cliente>(url)
  }

}
