import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ROSES_API } from '../app.api';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private tst: ToastrService) { }

  inicio(): Observable<Home[]> {
    return this.http.get<Home[]>(`${ROSES_API}/car`).pipe(
      map( inicio => inicio),
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
