import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BebidaService } from '../bebidas/bebida.service';
import { DoceService } from '../doces/doce.service';
import { SalgadoService } from '../salgados/salgado.service';
import { Salg } from '../salgados/salgado/salgado.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  detalhes: Salg;

  constructor(private dcser: DoceService, private route: ActivatedRoute, private sgser: SalgadoService, private bbser: BebidaService) { }

  ngOnInit(): void {
    this.dcser.candyById(this.route.snapshot.params['id']).subscribe(doces => {
      this.detalhes = doces;
    })
    this.sgser.salById(this.route.snapshot.params['id']).subscribe(salgados => {
      this.detalhes = salgados;
    })
    this.bbser.bbById(this.route.snapshot.params['id']).subscribe(bebidas => {
      this.detalhes = bebidas;
    })
  }

  }
