import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LayoutGrid,
  Palette,
  Brush,
  Smartphone,
  Newspaper,
  LayoutList,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const customizationOptions = [
  {
    id: 1,
    title: "Wybierz swój układ",
    description: "Zdecyduj o strukturze strony.",
    icon: <LayoutGrid size={32} />,
    category: "Układ",
    details:
      "Proste landing page czy rozbudowane serwisy? Ty wybierasz fundament.",
  },
  {
    id: 2,
    title: "Wybierz swój styl",
    description: "Minimalizm czy ekspresja?",
    icon: <Palette size={32} />,
    category: "Styl",
    details:
      "Dopasuj estetykę do swojej branży. Nowoczesny design, który przyciąga.",
  },
  {
    id: 3,
    title: "Wybierz swój design",
    description: "Kolory i typografia.",
    icon: <Brush size={32} />,
    category: "Design",
    details:
      "Stworzymy spójny system wizualny, który wyróżni Cię na tle konkurencji.",
  },
  {
    id: 4,
    title: "Responsywność",
    description: "Idealna na każdym ekranie.",
    icon: <Smartphone size={32} />,
    category: "RWD",
    details: "Perfekcyjne działanie na telefonach, tabletach i komputerach.",
  },
  {
    id: 5,
    title: "Wybierz funkcje",
    description: "Od galerii po formularze.",
    icon: <LayoutList size={32} />,
    category: "Funkcje",
    details: "Dostosuj funkcjonalności do potrzeb Twoich klientów.",
  },
  {
    id: 6,
    title: "Dostosuj treść",
    description: "Twoja historia, Twoje słowa.",
    icon: <Newspaper size={32} />,
    category: "Content",
    details: "Pomożemy Ci ubrać myśli w słowa, które sprzedają.",
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-2 block">
            Proces Tworzenia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ty </span>
            <span className="text-gradient">decydujesz</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Budowa strony to proces, w którym Twoja wizja jest najważniejsza.
            <br className="hidden md:block" />
            Kliknij kafelki poniżej, aby zobaczyć, jak budujemy Twój sukces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {customizationOptions.map((option) => (
            <div
              key={option.id}
              onClick={() =>
                setActiveId(activeId === option.id ? null : option.id)
              }
              className={cn(
                "group relative cursor-pointer transition-all duration-500",
                activeId === option.id
                  ? "scale-105 z-10"
                  : "hover:scale-[1.02]",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity duration-500",
                  activeId === option.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-50",
                )}
              />

              <Card
                className={cn(
                  "relative h-full bg-card border-white/5 overflow-hidden transition-all duration-300",
                  activeId === option.id
                    ? "border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                    : "hover:border-white/10 hover:bg-card/80",
                )}
              >
                <CardContent className="p-6 h-full flex flex-col items-start gap-4">
                  <div
                    className={cn(
                      "p-3 rounded-xl transition-all duration-300",
                      activeId === option.id
                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                        : "bg-white/5 text-muted-foreground group-hover:text-white group-hover:bg-white/10",
                    )}
                  >
                    {option.icon}
                  </div>

                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                        {option.category}
                      </span>
                      {activeId === option.id && (
                        <CheckCircle2
                          size={16}
                          className="text-indigo-500 animate-in zoom-in"
                        />
                      )}
                    </div>

                    <h3
                      className={cn(
                        "text-xl font-semibold transition-colors duration-300",
                        activeId === option.id ? "text-white" : "text-white/90",
                      )}
                    >
                      {option.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {option.description}
                    </p>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-500 ease-in-out",
                        activeId === option.id
                          ? "grid-rows-[1fr] opacity-100 pt-2"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-white/80 border-l-2 border-indigo-500pl-3 pl-3">
                          {option.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
