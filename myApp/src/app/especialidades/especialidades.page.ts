import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.page.html',
  styleUrls: ['./especialidades.page.scss'],
  standalone: false,
})
export class EspecialidadesPage implements OnInit {

  especialidades: any[] = [];
  especialidadesFiltradas: any[] = [];

  termoBusca = '';

  ngOnInit() {
    this.especialidades = [
      {
        nome: 'Cardiologia',
        descricao: 'Cuidados com o coração e sistema circulatório',
        tipo: 'cardiologia'
      },
      {
        nome: 'Neurologia',
        descricao: 'Tratamento do sistema nervoso e cérebro',
        tipo: 'neurologia'
      },
      {
        nome: 'Oftalmologia',
        descricao: 'Saúde dos olhos e visão',
        tipo: 'oftalmologia'
      },
      {
        nome: 'Ortopedia',
        descricao: 'Ossos, articulações e músculos',
        tipo: 'ortopedia'
      },
      {
        nome: 'Pediatria',
        descricao: 'Cuidados médicos para crianças e adolescentes',
        tipo: 'pediatria'
      },
    ];

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
