import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ROSES_API } from '../app.api';
import { Drink } from './ebbida/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  constructor(private http: HttpClient, private tst: ToastrService) { }

  beb(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${ROSES_API}/bebidas`).pipe(
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