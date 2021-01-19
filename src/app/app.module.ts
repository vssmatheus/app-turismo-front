import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoPontoComponent } from './modules/novo-ponto/novo-ponto.component';
import { ListPontosComponent } from './modules/list-pontos/list-pontos.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { NovaCidadeComponent } from './modules/nova-cidade/nova-cidade.component';
import { ListCidadesComponent } from './modules/list-cidades/list-cidades.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoPontoComponent,
    ListPontosComponent,
    HomeComponent,
    PageNotFoundComponent,
    NovaCidadeComponent,
    ListCidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
