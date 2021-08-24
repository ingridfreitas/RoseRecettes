import { Component, OnInit } from '@angular/core';
import { DoceService } from './doce.service';
import { Candy } from './doce/doce.model';

@Component({
  selector: 'app-doces',
  templateUrl: './doces.component.html',
  styleUrls: ['./doces.component.css']
})
export class DocesComponent implements OnInit {

  doces: Candy[] = [];

  constructor(private dcService : DoceService) { }

  ngOnInit(): void {
    this.dcService.candy().subscribe(retorno =>{
      this.doces = retorno;
    });
    console.log(this.doces);
  }

}
