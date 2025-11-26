import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: false,
})
export class PacientePage  {

  dadosUsuario = {
    nome: 'Maria Santos Silva',
    dataNascimento: '15/03/1985',
    email: 'maria.santos@email.com',
    telefone: '(11) 98765-4321',
    endereco: 'Rua das Flores, 123 - São Paulo, SP'
  };

  constructor() {}

  sairDaConta() {
    console.log('Sair da conta');
  }
}
