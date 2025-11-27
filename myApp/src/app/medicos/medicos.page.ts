import { Component } from '@angular/core';
import { lista_medicos, Medico } from './medicos-dados';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
  standalone: false,
})
export class MedicosPage {

  textoBusca = '';
  cor = '';

  medicos: Medico[] = lista_medicos;
  medicosFiltrados: Medico[] = [];

  constructor() {
    // começa mostrando todos os médicos
    this.medicosFiltrados = [...this.medicos];
  }

  filtrarMedicos() {
    const texto = this.textoBusca.toLowerCase().trim();

    if (!texto) {
      this.medicosFiltrados = [...this.medicos];
      return;
    }

    this.medicosFiltrados = this.medicos.filter(medico =>
      medico.nome.toLowerCase().includes(texto) ||
      medico.especialidade.toLowerCase().includes(texto) ||
      medico.crm.toLowerCase().includes(texto)
    );
  }

  estiloStatus(status: string): string {
    if (status === 'Indisponível') {
      return 'danger';
    } else {
      return 'success';
    }
  }
}
