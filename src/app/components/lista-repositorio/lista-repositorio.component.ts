import { Component} from '@angular/core';

// export interface Section {
//   name: string;
//   status: string;
//   usuario: string;
//   permissoes: string;
//   updated: Date;
// }

export interface Section {
  icone: string;
  name: string;
  update: Date;
  tamanho: string;
  user: string;
}

const ELEMENT_DATA: Section[] = [
  {icone: '',  name: 'Photos', tamanho: '123Mb', update: new Date('01/12/2020'), user: 'admin'},
  {icone: '', name: 'Recipes', tamanho: '123.3Kb', update: new Date('01/12/2020'), user: 'root'},
  {icone: '', name: 'Works', tamanho: '43Mb', update: new Date('01/12/2020'), user: 'rafael.borges'},
  {icone: '', name: 'RH', tamanho: '23.1Kb', update: new Date('1/1/20'), user: 'rc.costa'},

];

@Component({
  selector: 'app-lista-repositorio',
  templateUrl: './lista-repositorio.component.html',
  styleUrls: ['./lista-repositorio.component.css']
})
export class ListaRepositorioComponent {
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

  displayedColumns: string[] = ['icone', 'name', 'tamanho', 'update', 'user'];
  dataSource = ELEMENT_DATA;


}
