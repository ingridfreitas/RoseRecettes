import { Component, OnInit } from '@angular/core';
import { SalgadoService } from './salgado.service';
import { Salg } from './salgado/salgado.model';

@Component({
  selector: 'app-salgados',
  templateUrl: './salgados.component.html',
  styleUrls: ['./salgados.component.css']
})
export class SalgadosComponent implements OnInit {

  salgados: Salg[] = [];

  constructor(private sgService: SalgadoService) { }

  ngOnInit(): void {
    this.sgService.salgados().subscribe(retorno => {
      this.salgados = retorno;
      console.log(this.salgados)
    })
  }

}
