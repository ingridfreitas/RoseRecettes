import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CaeserComponent } from './caeser/caeser.component';
import { CandysComponent } from './candys/candys.component';
import { DocesComponent } from './doces/doces.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { SalgadosComponent } from './salgados/salgados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'doces', component: DocesComponent},
  {path: 'salgados', component: SalgadosComponent},
  {path: 'bebidas', component: BebidasComponent},
  {path: 'caeser', component: CaeserComponent},
  {path: 'candys', component: CandysComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
