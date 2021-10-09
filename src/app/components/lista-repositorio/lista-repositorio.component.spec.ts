import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRepositorioComponent } from './lista-repositorio.component';

describe('ListaRepositorioComponent', () => {
  let component: ListaRepositorioComponent;
  let fixture: ComponentFixture<ListaRepositorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRepositorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
