import { Component, Input, OnInit } from '@angular/core';
import { Candy } from './doce.model';

@Component({
  selector: 'app-doce',
  templateUrl: './doce.component.html',
  styleUrls: ['./doce.component.css']
})
export class DoceComponent implements OnInit {

  @Input() doces: Candy;

  constructor() { }

  ngOnInit(): void {
  }

}
