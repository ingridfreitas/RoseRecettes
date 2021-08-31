import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalgadoService } from '../salgado.service';
import { Salg } from './salgado.model';

@Component({
  selector: 'app-salgado',
  templateUrl: './salgado.component.html',
  styleUrls: ['./salgado.component.css']
})
export class SalgadoComponent implements OnInit {

  @Input() salgados: Salg;

  constructor (private route: Router, private sgService: SalgadoService) { }

  ngOnInit(): void {

  }

  abrir(salgados: Salg){
    this.sgService.guardar('salgados',salgados);
    this.route.navigateByUrl('caeser');
    console.log('Okay', this.salgados)
  }
}
