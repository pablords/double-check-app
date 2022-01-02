import { Home } from "../components/Home";


export default {
  title: "home",
  parameters: {
    layout: "fullscreen",
  },
};

const dataTable = [
  {
    id: 1,
    pon: "11091700",
    data_abertura_tt: "2020-01-05 11:00:00",
    tipo: "Defeito",
    detalhe: "Banda Larga",
    reicidencia: 3,
    armario: "MGIIG_G1A32",
    cidade: "Ipatinga",
    tecnico: "jose da silva",
    historico: [
      {
        id: 1,
        pon: "11091700",
        data_auditoria: "2020-12-01 11:00:00",
        tipo: "Defeito",
        detalhe: "Banda Larga",
        reicidencia: 3,
        armario: "MGIIG_G1A32",
        cidade: "Ipatinga",
        tecnico: "jose da silva",
      },
      {
        id: 1,
        pon: "11091700",
        data_auditoria: "2020-12-01 11:00:00",
        tipo: "Defeito",
        detalhe: "Banda Larga",
        reicidencia: 3,
        armario: "MGIIG_G1A32",
        cidade: "Ipatinga",
        tecnico: "jose da silva",
      },
    ],
  },
  {
    id: 2,
    pon: "11091700",
    data_abertura_tt: "2020-01-05 11:00:00",
    tipo: "Defeito",
    detalhe: "Banda Larga",
    reicidencia: 3,
    armario: "MGIIG_G1A32",
    cidade: "Ipatinga",
    tecnico: "jose da silva",
    historico: [
      {
        id: 1,
        pon: "11091700",
        data_auditoria: "2020-12-01 11:00:00",
        tipo: "Defeito",
        detalhe: "Banda Larga",
        reicidencia: 3,
        armario: "MGIIG_G1A32",
        cidade: "Ipatinga",
        tecnico: "jose da silva",
      },
      {
        id: 1,
        pon: "11091700",
        data_auditoria: "2020-12-01 11:00:00",
        tipo: "Defeito",
        detalhe: "Banda Larga",
        reicidencia: 3,
        armario: "MGIIG_G1A32",
        cidade: "Ipatinga",
        tecnico: "jose da silva",
      },
    ],
  },
];

export const home = (args: any) => <Home {...args} />;

home.args = {
  auditoria: dataTable,
  historico: dataTable[0].historico,
};

export const emptyHome = (args: any) => <Home {...args} />;

emptyHome.args = {
  auditoria: [],
  historico: [],
};
