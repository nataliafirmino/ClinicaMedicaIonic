import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
  standalone: false,
})
export class MedicosPage implements OnInit {

  textoBusca = '';
  cor = '';

  medicos: any[] = [
    {
      nome: 'Dr. João Silva',
      especialidade: 'Cardiologia',
      crm: '1245-SP',
      foto: 'assets/img/medico1.jpg',
      status: "Disponível"
    },
    {
      nome: 'Dra. Ana Costa',
      especialidade: 'Cardiologia',
      crm: '2345-SP',
      foto: 'assets/img/fotoPerfil.jpg',
      status: "Disponível"
    },
    {
      nome: 'Dr. Pedro Almeida',
      especialidade: 'Ortopedia',
      crm: '3456-SP',
      foto: 'assets/img/medico3.png',
      status: "Indisponível"
    }
  ];

  medicosFiltrados: any[] = [];

  ngOnInit() {
    this.medicosFiltrados = [...this.medicos];
  }

  filtrarMedicos() {
    const t = this.textoBusca.toLowerCase().trim();

    if (!t) {
      this.medicosFiltrados = [...this.medicos];
      return;
    }

    this.medicosFiltrados = this.medicos.filter(m =>
      m.nome.toLowerCase().includes(t) ||
      m.especialidade.toLowerCase().includes(t)
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
