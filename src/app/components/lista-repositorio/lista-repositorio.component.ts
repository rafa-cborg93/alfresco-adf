import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  status: string;
  usuario: string;
  permissoes: string;
  updated: Date;
}

@Component({
  selector: 'app-lista-repositorio',
  templateUrl: './lista-repositorio.component.html',
  styleUrls: ['./lista-repositorio.component.css']
})
export class ListaRepositorioComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      status: 'ativo',
      usuario: 'admin',
      permissoes: 'somente leitura',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      status:'ativo',
      usuario: 'rafael.borges',
      permissoes: 'somente leitura',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      status: 'inativo',
      usuario: 'cborges',
      permissoes: 'publico',
      updated: new Date('1/28/16'),
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
