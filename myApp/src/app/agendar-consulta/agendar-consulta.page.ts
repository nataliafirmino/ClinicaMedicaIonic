import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


type Especialidade = { id: string; nome: string };
type Medico = { id: string; nome: string; especialidadeId: string };

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.page.html',
  styleUrls: ['./agendar-consulta.page.scss'],
  standalone: false,
})
export class AgendarConsultaPage {
  

  // Para quem é a consulta
  consultaPara: 'mim' | 'outro' = 'mim';

  // Dados do paciente (quando for outra pessoa)
  paciente = {
    nome: '',
    cpf: '',
    genero: '',
    dataNascimento: ''
  };

  // Listas mockadas
  especialidades: Especialidade[] = [
    { id: 'cardio', nome: 'Cardiologia' },
    { id: 'derma', nome: 'Dermatologia' },
    { id: 'orto', nome: 'Ortopedia' },
  ];

  medicos: Medico[] = [
    { id: 'ana', nome: 'Dra. Ana Costa', especialidadeId: 'cardio' },
    { id: 'joao', nome: 'Dr. João Lima', especialidadeId: 'cardio' },
    { id: 'paula', nome: 'Dra. Paula Souza', especialidadeId: 'derma' },
    { id: 'carlos', nome: 'Dr. Carlos Silva', especialidadeId: 'orto' },
  ];

  medicosFiltrados: Medico[] = [];

  // Campos da consulta
  especialidadeId: string | null = null;
  medicoId: string | null = null;
  dataConsulta: string | null = null;

  constructor(private toastCtrl: ToastController) {}

  onConsultaParaChange() {
    // Se voltar pra "mim", limpa o formulário da outra pessoa
    if (this.consultaPara === 'mim') {
      this.paciente = {
        nome: '',
        cpf: '',
        genero: '',
        dataNascimento: ''
      };
    }
  }

  onEspecialidadeChange() {
    // limpa médico atual
    this.medicoId = null;

    // se não tem especialidade, zera lista
    if (!this.especialidadeId) {
      this.medicosFiltrados = [];
      return;
    }

    // filtra médicos pela especialidade escolhida
    this.medicosFiltrados = this.medicos.filter(
      m => m.especialidadeId === this.especialidadeId
    );
  }

  // Validação simples do formulário
  get formValido() {
    const dadosConsultaOK =
      !!this.especialidadeId &&
      !!this.medicoId &&
      !!this.dataConsulta;

    if (this.consultaPara === 'mim') return dadosConsultaOK;

    const dadosPacienteOK =
      this.paciente.nome.trim().length > 2 &&
      this.paciente.cpf.trim().length >= 11 &&
      !!this.paciente.genero &&
      !!this.paciente.dataNascimento;

    return dadosConsultaOK && dadosPacienteOK;
  }

  async confirmarAgendamento() {
    // por enquanto só mock
    const toast = await this.toastCtrl.create({
      message: 'Consulta confirmada! (mock)',
      duration: 1500,
      position: 'top',
      color: 'success'
    });
    toast.present();

    console.log({
      consultaPara: this.consultaPara,
      paciente: this.paciente,
      consulta: {
        especialidadeId: this.especialidadeId,
        medicoId: this.medicoId,
        dataConsulta: this.dataConsulta
      }
    });
  }
}
