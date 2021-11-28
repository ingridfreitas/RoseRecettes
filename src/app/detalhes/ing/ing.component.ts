import { Component, Input, OnInit } from '@angular/core';
import { Salg } from 'src/app/salgados/salgado/salgado.model';

@Component({
  selector: 'app-ing',
  templateUrl: './ing.component.html',
  styleUrls: ['./ing.component.css']
})
export class IngComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() detalhes

}
