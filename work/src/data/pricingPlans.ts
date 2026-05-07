export type PricingPlan = {
  id: number;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  includesFrom?: string;
  popular: boolean;
  customStyle?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "~1099 zł",
    description: "Idealne rozwiązanie dla małych firm i osób prywatnych.",
    features: [
      "Strona typu one-page",
      "Responsywny design",
      "Do 5 sekcji",
      "Formularz kontaktowy",
      "Podstawowe SEO",
      "Domena i hosting (w własnym zakresie)",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Standard",
    price: "~1500 zł",
    description:
      "Rozwiązanie dla rozwijających się biznesów z większymi potrzebami.",
    features: [
      "Do 5 podstron",
      "Responsywny design",
      "Galeria zdjęć",
      "Integracja z social media",
      "Domena i hosting (w własnym zakresie)",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Custom",
    price: "Do uzgodnienia",
    description: "Twoja wizja, Twoje warunki - pełna personalizacja.",
    features: [
      "Zaawansowane funkcje",
      "Dedykowane rozwiązania",
      "Pełna personalizacja designu",
      "Priorytetowe wsparcie",
      "Nielimitowane poprawki",
    ],
    popular: false,
    customStyle: true,
  },
];

export const socialMediaPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: "800 zł netto",
    priceNote: "/ miesiąc",
    description:
      "Pierwsze kroki na Instagramie – stały rytm publikacji bez stresu.",
    features: [
      "Harmonogram postów zgodny z planem komunikacji",
      "6 postów (zdjęcia, karuzele, grafiki) z materiałów klienta",
      "Udostępnianie postów na Instastories",
      "2 rolki z materiałów klienta",
      "Moderowanie postów i komentarzy",
      "Spotkanie online raz w miesiącu lub raportowanie mailowe",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Standard",
    price: "1 800 zł netto",
    priceNote: "/ miesiąc",
    description:
      "Balans między zasięgiem a angażującym contentem dla rozwijających się marek.",
    includesFrom: "Starter",
    features: [
      "8 postów (zamiast 6)",
      "2 rolki z materiałów stockowych",
      "2 rolki nagrane i zmontowane przez Insta-Partnera",
      "4 sety Instastories (do 5 kafelków)",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Pro",
    price: "2 100 zł netto",
    priceNote: "/ miesiąc",
    description:
      "Dla marek stawiających na silną obecność i wysokie zasięgi organiczne.",
    includesFrom: "Standard",
    features: [
      "10 postów (zamiast 8)",
      "3 rolki z materiałów stockowych (zamiast 2)",
      "3 rolki nagrane przez Insta-Partnera (zamiast 2)",
      "6 setów Instastories (zamiast 4)",
    ],
    popular: false,
    customStyle: true,
  },
  {
    id: 4,
    name: "Premium",
    price: "2 800 zł netto",
    priceNote: "/ miesiąc",
    description:
      "Kompleksowa obsługa dla marek premium z dynamicznym wzrostem i autorskim contentem.",
    includesFrom: "Pro",
    features: [
      "12 postów (zamiast 10)",
      "4 rolki nagrane przez Insta-Partnera (zamiast 3)",
      "8 setów Instastories (zamiast 6)",
      "Uczestnictwo w evencie firmowym raz na kwartał",
    ],
    popular: false,
  },
];
