import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/models/cidade.model';
import { CidadesService } from '../../services/cidades.service';
/* import { CidadeModel } from './cidade.model'; */

@Component({
  selector: 'app-list-pontos',
  templateUrl: './list-pontos.component.html',
  styleUrls: ['./list-pontos.component.css']
})
export class ListPontosComponent implements OnInit {

  cidades: Array<any>

  constructor(private cidadesService: CidadesService) {
    this.cidades = new Array<any>()
  }

  ngOnInit(): void {
    this.listarCidades();
  }

  listarCidades(){
    this.cidadesService.listarCidades().subscribe((cidades) => {
      this.cidades = cidades;
      console.log(cidades);
    })
  }

  /* listarCidades(){
    this.cidadesService.listarCidades().subscribe((cidades) => {
      this.cidades = cidades;
      console.log(cidades);
    },err =>{
      console.log('Erro ao listar as cidadess', err);
    })
  } */

}
