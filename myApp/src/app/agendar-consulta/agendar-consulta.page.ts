import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { lista_medicos, Medico } from '../medicos/medicos-dados';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.page.html',
  styleUrls: ['./agendar-consulta.page.scss'],
  standalone: false,
})
export class AgendarConsultaPage {

  consultaPara: 'mim' | 'outro' = 'mim';

  // Dados do paciente (quando for outra pessoa)
  paciente = {
    nome: '',
    cpf: '',
    cep: '',
    genero: '',
    dataNascimento: ''
  };

  // Médicos vindos do arquivo de médicos
  medicos: Medico[] = lista_medicos;
  medicosFiltrados: Medico[] = [];

  // Especialidades em texto
  especialidades: string[] = [];

  // Horários disponíveis
  horariosDisponiveis: string[] = [
    '08:00', '08:30', '09:00', '09:30',
    '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30'
  ];

  // Seleções (sem id, só texto)
  especialidadeSelecionada: string | null = null;
  medicoSelecionado: string | null = null;
  dataConsulta: string | null = null;
  horarioConsulta: string | null = null;

  constructor(private toastCtrl: ToastController, public storage: Storage) {
    this.preencherEspecialidades();
    this.medicosFiltrados = [...this.medicos];
    this.iniciar();
    this.carregar();
  }

  async iniciar() {
    this.storage = await this.storage.create();
  }

  // Preenche especialidades com for
  preencherEspecialidades() {
    const lista: string[] = [];

    for (const medico of this.medicos) {
      if (!lista.includes(medico.especialidade)) {
        lista.push(medico.especialidade);
      }
    }

    this.especialidades = lista;
  }

  buscarConsulta() {
    if (this.consultaPara === 'mim') {
      this.paciente = {
        nome: '',
        cpf: '',
        cep: '',
        genero: '',
        dataNascimento: ''
      };
    }
  }

  buscarEspecialidade() {
    this.medicoSelecionado = null;

    if (!this.especialidadeSelecionada) {
      this.medicosFiltrados = [...this.medicos];
      this.salvar();
      return;
    }

    const filtrados: Medico[] = [];
    for (const medico of this.medicos) {
      if (medico.especialidade === this.especialidadeSelecionada) {
        filtrados.push(medico);
        this.salvar();
      }
    }

    this.medicosFiltrados = filtrados;
    this.salvar();
  }

  private salvar() {
    this.storage.set('medicos', this.medicos);
  }

  private carregar() {
    this.storage.get('medicos').then((value) => {
      if (value !== null) {
        this.medicos = value;
      }
    });
  }

  // ================= MÁSCARAS =================

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

    this.paciente.cpf = value;
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

    this.paciente.cep = value;
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

    this.paciente.dataNascimento = value;
  }

  // ============================================

  // Validação do formulário (cep é opcional por enquanto)
  get formularioValido() {
    const dadosConsulta =
      !!this.especialidadeSelecionada &&
      !!this.medicoSelecionado &&
      !!this.dataConsulta &&
      !!this.horarioConsulta;

    if (this.consultaPara === 'mim') return dadosConsulta;

    const dadosPaciente =
      this.paciente.nome.trim().length > 2 &&
      this.paciente.cpf.trim().length >= 11 &&
      !!this.paciente.genero &&
      !!this.paciente.dataNascimento;

    return dadosConsulta && dadosPaciente;
  }

  async confirmarAgendamento() {
    const toast = await this.toastCtrl.create({
      message: 'Consulta confirmada! (mock)',
      duration: 1500,
      position: 'top',
      color: 'success',
    });
    await toast.present();

    console.log({
      consultaPara: this.consultaPara,
      paciente: this.paciente,
      consulta: {
        especialidade: this.especialidadeSelecionada,
        medico: this.medicoSelecionado,
        dataConsulta: this.dataConsulta,
        horarioConsulta: this.horarioConsulta,
      },
    });
  }
}
