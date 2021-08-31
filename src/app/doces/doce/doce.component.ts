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

  constructor (private route: Router, private dcService: DoceService) { }

  ngOnInit(): void {

  }

  abrir(doces: Salg){
    this.dcService.guardar('doces',doces);
    this.route.navigateByUrl('candys');
    console.log('Okay', this.doces)
  }
}
