import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: Home[] = [];

  constructor(private dcService : HomeService) { }

  ngOnInit(): void {
    this.dcService.inicio().subscribe(retorno =>{
      this.home = retorno;
    });
    console.log(this.home);
  }

}
