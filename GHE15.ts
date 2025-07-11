export class GHE15 {
  numero: 15;
  setores = {
    nome_setor: 'CCBS – DEPARTAMENTO DE MORFOLOGIA',
    locais: {
      nome_local: 'SALA DE ESTERELIZAÇÃO',
      cargos: {
        nome_cargo: [
          'TECNICO DE LABORATÓRIO- ÁREA',
          'AUXILIAR DE LABORATÓRIO'
        ],
        exposicoes: [
          {
            nome: 'RUÍDO',
            insalubre: false,
            enquadramento: 'NR 15 - Anexo nº1',
            parecer:
              'Para exposição habitual ou permanente, a intensidade mensurada está abaixo do Limite de Tolerância estabelecido pela Norma Regulamentadora n°15 da Portaria 3.214 de 8 de Junho de 1978.'
          },
          {
            nome: 'CALOR',
            insalubre: false,
            enquadramento: 'NR 15 - Anexo nº3',
            parecer:
              'Para exposição habitual ou permanente, a intensidade mensurada está abaixo do Limite de Tolerância estabelecido pela Norma Regulamentadora n°15 da Portaria 3.214 de 8 de Junho de 1978. OBS: Vide cálculo da Análise de Sobrecarga Térmica em anexo.'
          },
          {
            nome: 'MICRORGANISMOS PATOGÊNICOS DIVERSOS',
            insalubre: true,
            enquadramento: 'Orientação Normativa nº6 – Anexo NR 15 - Anexo nº14',
            parecer:
              'Para exposição habitual ou permanente ao agente biológico há a caracterização de insalubridade na atividade de: "Trabalho técnico habitual em laboratórios de análise clínica e histopatologia. Aplica-se somente aos técnicos que manipulam material biológico."'
          }
        ]
      }
    }
  };
}