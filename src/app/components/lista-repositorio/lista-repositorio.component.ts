import { Component, OnInit } from '@angular/core';

// export interface Section {
//   name: string;
//   status: string;
//   usuario: string;
//   permissoes: string;
//   updated: Date;
// }

export interface Section {
  name: string;
  position: number;
  weight: number;
  tamanho: string;
  symbol: string;
}

const ELEMENT_DATA: Section[] = [
  {position: 1, name: 'Photos', tamanho:'123Mb', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Recipes', tamanho:'123.3Kb',weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Works', tamanho:'43Mb', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'RH', tamanho: '23.1Kb', weight: 9.0122, symbol: 'Be'},

];

@Component({
  selector: 'app-lista-repositorio',
  templateUrl: './lista-repositorio.component.html',
  styleUrls: ['./lista-repositorio.component.css']
})
export class ListaRepositorioComponent implements OnInit {
  // folders: Section[] = [
  //   {
  //     name: 'Photos',
  //     status: 'ativo',
  //     usuario: 'admin',
  //     permissoes: 'somente leitura',
  //     updated: new Date('1/1/16'),
  //   },
  //   {
  //     name: 'Recipes',
  //     status:'ativo',
  //     usuario: 'rafael.borges',
  //     permissoes: 'somente leitura',
  //     updated: new Date('1/17/16'),
  //   },
  //   {
  //     name: 'Work',
  //     status: 'inativo',
  //     usuario: 'cborges',
  //     permissoes: 'publico',
  //     updated: new Date('1/28/16'),
  //   }
  // ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
