import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalgadoService } from '../salgados/salgado.service';
import { Salg } from '../salgados/salgado/salgado.model';

@Component({
  selector: 'app-caeser',
  templateUrl: './caeser.component.html',
  styleUrls: ['./caeser.component.css']
})
export class CaeserComponent implements OnInit {

  salgados: Salg;

  constructor(public sgService: SalgadoService, public route: Router) { }

  ngOnInit() {
    this.salgados = this.sgService.pegar('salgados');
    console.log('Receita Enviada', this.salgados);
  }

}
