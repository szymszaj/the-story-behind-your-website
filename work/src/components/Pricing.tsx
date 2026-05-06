import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  Globe,
  Instagram,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  pricingPlans,
  socialMediaPlans,
  PricingPlan,
} from "@/data/pricingPlans";

const COLLAPSE_THRESHOLD = 6;

const PricingCard = ({
  plan,
  isSocial,
}: {
  plan: PricingPlan;
  isSocial: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const needsExpand = plan.features.length > COLLAPSE_THRESHOLD;

  return (
    <div className="relative mt-6">
      <Card
        className={`border-white/5 hover:border-white/20 transition-all duration-300 ${
          plan.popular
            ? "relative bg-gradient-to-b from-secondary/60 to-secondary/20 border-white/10"
            : plan.customStyle
              ? "relative bg-gradient-to-b from-[#9b87f5]/30 to-[#7E69AB]/10 border-white/10"
              : "bg-secondary/40"
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
            <div className="bg-foreground text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
              Najpopularniejszy
            </div>
          </div>
        )}
        {plan.customStyle && (
          <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
            <div className="bg-[#9b87f5] text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
              {isSocial ? "Najwyższy zasięg" : "Pełna kontrola"}
            </div>
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-xl">{plan.name}</CardTitle>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-bold">{plan.price}</span>
            {plan.priceNote && (
              <span className="text-sm text-muted-foreground mb-0.5">
                {plan.priceNote}
              </span>
            )}
            <div className="relative group mb-0.5 ml-1">
              <Info
                size={15}
                className="text-muted-foreground/60 hover:text-muted-foreground cursor-default transition-colors"
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 px-3 py-2 rounded-lg bg-popover border border-white/10 text-xs text-muted-foreground shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-20 text-center leading-relaxed">
                Cena ulega zmianie w zależności od zapotrzebowania klienta
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white/10" />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-2">
          <p className="text-muted-foreground mb-5">{plan.description}</p>

          <div className="relative">
            <ul
              className={`space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${
                needsExpand && !expanded ? "max-h-[220px]" : "max-h-[1200px]"
              }`}
            >
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check
                    size={16}
                    className="mr-2 text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {needsExpand && !expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            )}
          </div>

          {needsExpand && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors py-1.5"
            >
              {expanded ? (
                <>
                  <ChevronUp size={14} /> Zwiń
                </>
              ) : (
                <>
                  <ChevronDown size={14} /> Rozwiń więcej
                </>
              )}
            </button>
          )}
        </CardContent>

        <CardFooter className="pt-2">
          <Link
            to={`/quote?type=${isSocial ? "social" : "websites"}`}
            className="w-full"
          >
            <Button
              className="w-full"
              variant={plan.popular || plan.customStyle ? "default" : "outline"}
            >
              Wyceń swój projekt
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"websites" | "social">("social");
  const plans = activeTab === "websites" ? pricingPlans : socialMediaPlans;

  return (
    <section id="pricing" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Cennik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wybierz pakiet, który najlepiej pasuje do Twoich potrzeb, lub
            skontaktuj się ze mną, aby omówić indywidualną wycenę.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 bg-secondary/60 border border-white/10 rounded-full gap-1 shadow-lg">
            <button
              onClick={() => setActiveTab("websites")}
              className={`flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "websites"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe size={18} />
              Strony internetowe
            </button>
            <button
              onClick={() => setActiveTab("social")}
              className={`flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "social"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Instagram size={18} />
              Social Media
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isSocial={activeTab === "social"}
            />
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
