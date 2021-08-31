import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoceService } from '../doces/doce.service';
import { Salg } from '../salgados/salgado/salgado.model';

@Component({
  selector: 'app-candys',
  templateUrl: './candys.component.html',
  styleUrls: ['./candys.component.css']
})
export class CandysComponent implements OnInit {

  doces: Salg;

  constructor(public dcService: DoceService, public route: Router) { }

  ngOnInit() {
    this.doces = this.dcService.pegar('doces');
    console.log('Receita Enviada', this.doces);
  }
}
