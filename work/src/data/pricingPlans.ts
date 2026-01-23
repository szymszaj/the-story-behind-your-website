export const pricingPlans = [
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
