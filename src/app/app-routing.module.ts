import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { DocesComponent } from './doces/doces.component';
import { HomeComponent } from './home/home.component';
import { SalgadosComponent } from './salgados/salgados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'doces', component: DocesComponent},
  {path: 'salgados', component: SalgadosComponent},
  {path: 'bebidas', component: BebidasComponent},
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
