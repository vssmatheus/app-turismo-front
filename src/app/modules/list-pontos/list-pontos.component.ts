import { Component, OnInit } from '@angular/core';
import { CidadesService } from '../../services/cidades.service';
/* import { CidadeModel } from './cidade.model'; */

@Component({
  selector: 'app-list-pontos',
  templateUrl: './list-pontos.component.html',
  styleUrls: ['./list-pontos.component.css']
})
export class ListPontosComponent implements OnInit {
  cidades: Array<any> = new Array();

  constructor(private cidadesService: CidadesService) {}

  ngOnInit() {
    this.listarCidades();
  }

  listarCidades(){
    this.cidadesService.listarCidades().subscribe(cidades => {
      this.cidades = cidades;
      console.log(this.cidades);
    },err =>{
      console.log('Erro ao listar as cidadess', err);
    })
  }

}
