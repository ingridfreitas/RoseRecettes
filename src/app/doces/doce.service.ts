import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ROSES_API } from '../app.api';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Salg } from '../salgados/salgado/salgado.model';

@Injectable({
  providedIn: 'root'
})
export class DoceService {

  constructor(private http: HttpClient, private tst: ToastrService) { }

  candy(): Observable<Salg[]> {
    return this.http.get<Salg[]>(`${ROSES_API}/doces`).pipe(
      map(doces => doces),
      catchError(erro => this.error(erro))
    );
  }

  candyById(id: String): Observable<Salg>{
    return this.http.get<Salg>(`${ROSES_API}/doces/${id}`).pipe(
      map(doces => doces),
      catchError(erro => this.exibirErro(erro))
    )
  }

  exibirErro(e: any): Observable<any>{
    this.exibirMsg('ERRO!', 'Erro de Conexão com banco de dados', 'Json erro');
    return EMPTY
  }

  error(e: any): Observable<any> {
    this.exibirMsg('ERRO 4002!!!!', 'Banco de Dados não ativado', 'toastr-error');
    return EMPTY
  }

  exibirMsg(titulo: string, mensagem: string, tipo: string): void {
    this.tst.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo)
  };
}
