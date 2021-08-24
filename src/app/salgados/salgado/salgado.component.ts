import { Component, Input, OnInit } from '@angular/core';
import { Salg } from './salgado.model';

@Component({
  selector: 'app-salgado',
  templateUrl: './salgado.component.html',
  styleUrls: ['./salgado.component.css']
})
export class SalgadoComponent implements OnInit {

  @Input() salgados: Salg;

  constructor() { }

  ngOnInit(): void {
  }

}
