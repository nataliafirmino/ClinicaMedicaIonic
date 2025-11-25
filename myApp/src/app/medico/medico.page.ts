import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
  standalone: false,
})
export class MedicoPage implements OnInit {

  textoBusca = '';

  medicos: any[] = [
    {
      nome: 'Dr. João Silva',
      especialidade: 'Cardiologia',
      avaliacao: 4.9,
      avaliacoes: 127,
      anos: 15,
      crm: '1245-SP',
      foto: 'assets/img/medico1.jpg'
    },
    {
      nome: 'Dra. Ana Costa',
      especialidade: 'Cardiologia',
      avaliacao: 4.8,
      avaliacoes: 95,
      anos: 12,
      crm: '2345-SP',
      foto: 'assets/img/medico2.jpg'
    },
    {
      nome: 'Dr. Pedro Almeida',
      especialidade: 'Ortopedia',
      avaliacao: 4.7,
      avaliacoes: 80,
      anos: 10,
      crm: '3456-SP',
      foto: 'assets/img/medico3.jpg'
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

  agendar(medico: any) {
    console.log('Agendar consulta com:', medico.nome);
  }
}
