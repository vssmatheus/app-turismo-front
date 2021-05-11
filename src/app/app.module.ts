import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPontosComponent } from './modules/list-pontos/list-pontos.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { NovaCidadeComponent } from './modules/nova-cidade/nova-cidade.component';
import { HttpClientModule } from '@angular/common/http';
import { CidadesService } from './services/cidades.service';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPontosComponent,
    HomeComponent,
    PageNotFoundComponent,
    NovaCidadeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CidadesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
