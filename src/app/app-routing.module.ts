import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BebidasComponent } from './bebidas/bebidas.component';
import { DocesComponent } from './doces/doces.component';
import { HomeComponent } from './home/home.component';
import { SalgadosComponent } from './salgados/salgados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'doces', component: DocesComponent},
  {path: 'salgados', component: SalgadosComponent},
  {path: 'bebidas', component: BebidasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
