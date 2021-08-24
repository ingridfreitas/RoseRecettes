import { Component, Input, OnInit } from '@angular/core';
import { Drink } from './bebida.model';

@Component({
  selector: 'app-ebbida',
  templateUrl: './ebbida.component.html',
  styleUrls: ['./ebbida.component.css']
})
export class EbbidaComponent implements OnInit {

  @Input() beb: Drink;
  constructor() { }

  ngOnInit(): void {
  }

}
