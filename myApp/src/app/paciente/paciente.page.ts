import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: false,
})
export class PacientePage implements OnInit {

  dadosUsuario = {
    nome: 'Maria Santos Silva',
    dataNascimento: '15/03/1985',
    email: 'maria.santos@email.com',
    telefone: '(11) 98765-4321',
    endereco: 'Rua das Flores, 123 - São Paulo, SP'
  };

  pacienteDesde = '2020';

  constructor() {}

  ngOnInit() {
    // depois você pode buscar essas infos de API ou storage
  }

  sairDaConta() {
    // lógica de logout
    console.log('Sair da conta clicado');
  }
}
