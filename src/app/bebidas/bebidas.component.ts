import { Component, OnInit } from '@angular/core';
import { Salg } from '../salgados/salgado/salgado.model';
import { BebidaService } from './bebida.service';
import { Drink } from './ebbida/bebida.model';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  drinks: Salg[] = [];

  constructor(private bbService : BebidaService) { }

  ngOnInit(): void {
    this.bbService.beb().subscribe(retorno =>{
      this.drinks = retorno;
    });
    console.log(this.drinks);
  }

}
