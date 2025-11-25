import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Modelo do paciente (usuário logado)
type Paciente = {
  id: number;
  nome: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  paciente: Paciente = {
    id: 1,
    nome: 'Maria'
  };

  constructor(private router: Router) {}

  ngOnInit() {
  }
  navegarPara(path: string) {
    this.router.navigateByUrl(path);
  }
}
