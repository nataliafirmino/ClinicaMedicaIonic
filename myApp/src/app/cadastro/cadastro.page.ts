import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage {

  constructor() { }

  nome?: string;
  cpf?: string;
  email?: string;
  dataNascimento?: string;
  genero?: string;
  senha?: string;

  logradouro?: string;
  numero?: number;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;

  maskCPF(event: any) {
    let value: string = event.detail.value || '';

    // tira tudo que não for número
    value = value.replace(/\D/g, '');

    // limita a 11 dígitos
    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d+)/, '$1.$2');
    }

    this.cpf = value;
  }

  maskCEP(event: any) {
    let value: string = event.detail.value || '';

    value = value.replace(/\D/g, '');

    if (value.length > 8) {
      value = value.substring(0, 8);
    }

    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d+)/, '$1-$2');
    }

    this.cep = value;
  }

  maskDataNascimento(event: any) {
    let value: string = event.detail.value || '';

    value = value.replace(/\D/g, '');

    // limita a 8 dígitos (DDMMAAAA)
    if (value.length > 8) {
      value = value.substring(0, 8);
    }

    if (value.length > 4) {
      value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }

    this.dataNascimento = value;
  }

}
