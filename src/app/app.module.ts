import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DocesComponent } from './doces/doces.component';
import { SalgadosComponent } from './salgados/salgados.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { DoceComponent } from './doces/doce/doce.component';
import { DoceService } from './doces/doce.service';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SalgadoComponent } from './salgados/salgado/salgado.component';
import { EbbidaComponent } from './bebidas/ebbida/ebbida.component';
import { SalgadoService } from './salgados/salgado.service';
import { BebidaService } from './bebidas/bebida.service';
import { CaeserComponent } from './caeser/caeser.component';
import { CandysComponent } from './candys/candys.component';
import { DrinksComponent } from './drinks/drinks.component';
import { AboutComponent } from './about/about.component';
import { HomeService } from './home/home.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DocesComponent,
    SalgadosComponent,
    BebidasComponent,
    DoceComponent,
    SalgadoComponent,
    EbbidaComponent,
    CaeserComponent,
    CandysComponent,
    DrinksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DoceService, SalgadoService, BebidaService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
