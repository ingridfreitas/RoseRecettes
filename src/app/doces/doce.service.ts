import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ROSES_API } from '../app.api';
import { Candy } from './doce/doce.model';
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

  private dados: any = []

  guardar(index: string, dados:any): boolean{
    if(index){
      this.dados[index] = dados;
      return true;
    }
    else{
      return false
    }
  }

  pegar(index: string):any{
    if(index){
      return this.dados[index];
    }
    else{
      return null;
    }
  }

  deletar(index: string): boolean{
    return delete this.dados[index];
  }
}
