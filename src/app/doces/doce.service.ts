import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ROSES_API } from '../app.api';
import { Candy } from './doce/doce.model';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DoceService {

  constructor(private http: HttpClient, private tst: ToastrService) { }

  candy(): Observable<Candy[]> {
    return this.http.get<Candy[]>(`${ROSES_API}/doces`).pipe(
      map(candy => candy),
      catchError(erro => this.error(erro))
    );
  }

  error(e: any): Observable<any> {
    this.exibirMsg('ERRO 4002!!!!', 'Banco de Dados não ativado', 'toastr-error');
    return EMPTY
  }

  exibirMsg(titulo: string, mensagem: string, tipo: string): void {
    this.tst.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo)
  };
}
