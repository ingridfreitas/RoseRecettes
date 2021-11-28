import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salg } from 'src/app/salgados/salgado/salgado.model';
import { BebidaService } from '../bebida.service';

@Component({
  selector: 'app-ebbida',
  templateUrl: './ebbida.component.html',
  styleUrls: ['./ebbida.component.css']
})
export class EbbidaComponent implements OnInit {

  @Input() drinks: Salg;

  constructor () { }

  ngOnInit(): void {

  }
}
