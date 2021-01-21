import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ListPontosComponent } from './modules/list-pontos/list-pontos.component';
import { NovaCidadeComponent } from './modules/nova-cidade/nova-cidade.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list-pontos', component: ListPontosComponent},
  {path: 'nova-cidade', component: NovaCidadeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
