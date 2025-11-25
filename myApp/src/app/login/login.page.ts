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
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    // lógica de login aqui
  }

  onForgotPassword() {
    // navegar para tela de recuperação de senha ou abrir modal
  }
}
