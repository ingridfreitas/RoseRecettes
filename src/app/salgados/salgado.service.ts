import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ROSES_API } from '../app.api';
import { Salg } from './salgado/salgado.model';

@Injectable({
  providedIn: 'root'
})
export class SalgadoService {

  constructor(private http: HttpClient, private tst: ToastrService) { }

  salgados(): Observable<Salg[]> {
    return this.http.get<Salg[]>(`${ROSES_API}/salgados`).pipe(
      map(candy => candy),
      catchError(erro => this.error(erro))
    );
  }

  salById(id: String): Observable<Salg>{
    return this.http.get<Salg>(`${ROSES_API}/salgados/${id}`).pipe(
      map(salgados => salgados),
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
