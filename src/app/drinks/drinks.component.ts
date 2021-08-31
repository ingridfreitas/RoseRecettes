import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BebidaService } from '../bebidas/bebida.service';
import { Salg } from '../salgados/salgado/salgado.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks: Salg;

  constructor(public bbService: BebidaService, public route: Router) { }

  ngOnInit() {
    this.drinks = this.bbService.pegar('drinks');
    console.log('Receita Enviada', this.drinks);
  }

}
