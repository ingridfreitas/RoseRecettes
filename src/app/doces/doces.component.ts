import { Component, OnInit } from '@angular/core';
import { Salg } from '../salgados/salgado/salgado.model';
import { DoceService } from './doce.service';

@Component({
  selector: 'app-doces',
  templateUrl: './doces.component.html',
  styleUrls: ['./doces.component.css']
})
export class DocesComponent implements OnInit {

  doces: Salg[] = [];

  constructor(private dcService : DoceService) { }

  ngOnInit(): void {
    this.dcService.candy().subscribe(retorno =>{
      this.doces = retorno;
    });
    console.log(this.doces);
  }

}
