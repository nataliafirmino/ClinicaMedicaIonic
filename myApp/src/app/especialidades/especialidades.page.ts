import { Component } from '@angular/core';
import { lista_especialidades } from './especialidades-dados';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
  standalone: false,
})
export class EspecialidadesPage  {

  especialidades: any[] = [];
  especialidadesFiltradas: any[] = [];

  termoBusca = '';

  constructor() {
    this.especialidades = lista_especialidades;
    this.especialidadesFiltradas = this.especialidades;
  }

  filtrar() {
    const termo = this.termoBusca.toLowerCase().trim();

    if (!termo) {
      this.especialidadesFiltradas = this.especialidades;
      return;
    }

    this.especialidadesFiltradas = this.especialidades.filter(e =>
      e.nome.toLowerCase().includes(termo)
    );
  }

  abrir(esp: any) {
    console.log('Especialidade selecionada:', esp);
  }
}
