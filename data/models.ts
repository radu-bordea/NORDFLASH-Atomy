export interface ModelItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export const MODELS: ModelItem[] = [
  { id: 1, title: "CADOU LA PRIMA COMANDĂ", desc: "Surpriză specială pentru tine!", image: "/assets/images/model1.png" },
  { id: 2, title: "LIVRARE DIRECT ACASĂ", desc: "În România și în majoritatea țărilor din Europa.", image: "/assets/images/model2.png" },
  { id: 3, title: "TESTARE PRODUSE GRATUITĂ", desc: "Descoperă ce ți se potrivește.", image: "/assets/images/model3.png" },
  { id: 4, title: "PREMII INTERNAȚIONALE", desc: "Recunoaștere globală pentru calitate și inovație.", image: "/assets/images/model4.png" },
  { id: 5, title: "BENEFICII ATOMY", desc: "Calitate premium. Ingrediente atent selecționate. Prețuri corecte.", image: "/assets/images/model5.png" },
  { id: 6, title: "VINO LA O TESTARE SKIN CARE", desc: "Analizăm tipul tău de ten și îți recomandăm rutina potrivită.", image: "/assets/images/model6.png" },
];

export default MODELS;