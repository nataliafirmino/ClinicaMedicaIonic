import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  senha = '';
  mostrarSenha = false;

  visualizarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  login(){
    //lógica de entrar com os dados salvos
  }

  logout(){
    //logica de sair
  }
}
