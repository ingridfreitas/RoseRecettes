import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() detalhes

}
