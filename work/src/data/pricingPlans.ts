export type PricingPlan = {
  id: number;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
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
    price: "1 000 zł netto",
    priceNote: "/ miesiąc",
    description: "Pierwsze kroki na Instagramie – stały rytm publikacji bez stresu.",
    features: [
      "Harmonogram postów zgodny z planem komunikacji",
      "8 postów (zdjęcia, karuzele, grafiki) z materiałów klienta",
      "Udostępnianie postów na Instastories",
      "2 rolki z materiałów klienta",
      "Moderowanie postów i komentarzy",
      "Spotkanie online raz w miesiącu lub raportowanie mailowe",
      "Bieżące publikowanie Instastories innych twórców z oznaczeniem profilu",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Essential",
    price: "1 500 zł netto",
    priceNote: "/ miesiąc",
    description: "Dla marek, które chcą rosnąć z regularnym, różnorodnym contentem.",
    features: [
      "Harmonogram postów zgodny z planem komunikacji",
      "10 postów (zdjęcia, karuzele, grafiki) z materiałów klienta",
      "Udostępnianie postów na Instastories",
      "2 rolki z materiałów klienta",
      "2 rolki z materiałów stockowych",
      "4 sety Instastories (do 5 kafelków)",
      "Moderowanie postów i komentarzy",
      "Spotkanie online raz w miesiącu",
      "Bieżące publikowanie Instastories innych twórców z oznaczeniem profilu",
    ],
    popular: false,
  },
  {
    id: 3,
    name: "Standard",
    price: "2 000 zł netto",
    priceNote: "/ miesiąc",
    description: "Balans między zasięgiem a angażującym contentem dla rozwijających się marek.",
    features: [
      "Harmonogram postów zgodny z planem komunikacji",
      "6 postów (zdjęcia, karuzele, grafiki) z materiałów klienta",
      "2 rolki z materiałów klienta",
      "2 rolki z materiałów stockowych",
      "2 rolki nagrane i zmontowane przez Insta-Partnera",
      "4 sety Instastories (do 5 kafelków)",
      "Moderowanie postów i komentarzy",
      "Spotkanie online raz w miesiącu",
      "Bieżące publikowanie Instastories innych twórców z oznaczeniem profilu",
    ],
    popular: true,
  },
  {
    id: 4,
    name: "Pro",
    price: "2 500 zł netto",
    priceNote: "/ miesiąc",
    description: "Dla marek stawiających na silną obecność i wysokie zasięgi organiczne.",
    features: [
      "Harmonogram postów zgodny z planem komunikacji",
      "4 posty (zdjęcia, karuzele, grafiki) z materiałów klienta",
      "4 rolki z materiałów klienta",
      "3 rolki z materiałów stockowych",
      "3 rolki nagrane i zmontowane przez Insta-Partnera",
      "8 setów Instastories (do 5 kafelków)",
      "Moderowanie postów i komentarzy",
      "Spotkanie online raz w miesiącu",
      "Bieżące publikowanie Instastories innych twórców z oznaczeniem profilu",
    ],
    popular: false,
    customStyle: true,
  },
  {
    id: 5,
    name: "Premium",
    price: "3 000 zł netto",
    priceNote: "/ miesiąc",
    description: "Kompleksowa obsługa dla marek premium z dynamicznym wzrostem i autorskim contentem.",
    features: [
      "Harmonogram postów zgodny z planem komunikacji",
      "4 posty (zdjęcia, karuzele, grafiki) z materiałów klienta",
      "4 rolki z materiałów klienta",
      "2 rolki z materiałów stockowych",
      "4 rolki nagrane i zmontowane przez Insta-Partnera",
      "12 setów Instastories (do 5 kafelków)",
      "Moderowanie postów i komentarzy",
      "Spotkanie online raz w miesiącu",
      "Uczestnictwo w evencie firmowym raz na kwartał",
      "Bieżące publikowanie Instastories innych twórców z oznaczeniem profilu",
    ],
    popular: false,
  },
];

