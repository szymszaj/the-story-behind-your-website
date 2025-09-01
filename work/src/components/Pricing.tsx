import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pricingPlans = [
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

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Cennik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Przejrzyste ceny bez ukrytych kosztów. Wybierz pakiet, który
            najlepiej pasuje do Twoich potrzeb, lub skontaktuj się ze mną, aby
            omówić indywidualną wycenę.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`border-white/5 hover:border-white/20 transition-all duration-500 animate-float-slow hover:animate-none ${
                plan.popular
                  ? "relative bg-gradient-to-b from-secondary/60 to-secondary/20 border-white/10"
                  : plan.customStyle
                  ? "relative bg-gradient-to-b from-[#9b87f5]/30 to-[#7E69AB]/10 border-white/10"
                  : "bg-secondary/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-foreground text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                    Najpopularniejszy
                  </div>
                </div>
              )}
              {plan.customStyle && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-[#9b87f5] text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                    Pełna kontrola
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        size={18}
                        className="mr-2 text-green-400 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/quote" className="w-full">
                  <Button
                    className="w-full"
                    variant={
                      plan.popular || plan.customStyle ? "default" : "outline"
                    }
                  >
                    Wyceń swój projekt
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Potrzebujesz czegoś innego?{" "}
            <a
              href="#contact"
              className="text-foreground underline underline-offset-4"
            >
              Skontaktuj się ze mną
            </a>{" "}
            po indywidualną wycenę.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
