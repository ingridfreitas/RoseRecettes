import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salg } from 'src/app/salgados/salgado/salgado.model';
import { DoceService } from '../doce.service';

@Component({
  selector: 'app-doce',
  templateUrl: './doce.component.html',
  styleUrls: ['./doce.component.css']
})
export class DoceComponent implements OnInit {

  @Input() doces: Salg;

  constructor () { }

  ngOnInit(): void {

  }
}
