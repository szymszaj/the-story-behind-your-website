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
  Globe,
  Instagram,
  CalendarDays,
  Clapperboard,
  ImagePlay,
  BarChart2,
  MessageCircleHeart,
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

const socialOptions = [
  {
    id: 1,
    title: "Strategia komunikacji",
    description: "Ton, tematyka i plan działania.",
    icon: <LayoutGrid size={32} />,
    category: "Strategia",
    details:
      "Tworzymy spójną ideę kreatywną, która określa jak, kiedy i do kogo mówisz — zanim pojawi się pierwsza publikacja.",
  },
  {
    id: 2,
    title: "Harmonogram postów",
    description: "Regularność, która buduje zasięg.",
    icon: <CalendarDays size={32} />,
    category: "Planowanie",
    details:
      "Każdy post, rolka i set stories jest zaplanowany z wyprzedzeniem w uzgodnionym kalendarzu publikacji.",
  },
  {
    id: 3,
    title: "Grafiki i posty",
    description: "Wizualna tożsamość Twojej marki.",
    icon: <Palette size={32} />,
    category: "Kreacja",
    details:
      "Tworzymy posty z materiałów przekazanych przez Ciebie: zdjęcia, karuzele, grafiki — spójne z Twoim brandem.",
  },
  {
    id: 4,
    title: "Rolki i wideo",
    description: "Content, który żyje i angażuje.",
    icon: <Clapperboard size={32} />,
    category: "Video",
    details:
      "Montujemy rolki z Twoich materiałów lub tworzymy autorskie wideo nagrywane telefonem — gotowe do publikacji.",
  },
  {
    id: 5,
    title: "Instastories",
    description: "Bieżąca komunikacja z odbiorcami.",
    icon: <ImagePlay size={32} />,
    category: "Stories",
    details:
      "Tworzymy sety do 5 kafelków, udostępniamy posty i relacje innych twórców z oznaczeniem profilu klienta.",
  },
  {
    id: 6,
    title: "Moderacja i analityka",
    description: "Reakcja i raportowanie wyników.",
    icon: <BarChart2 size={32} />,
    category: "Wyniki",
    details:
      "Moderujemy komentarze, przekazujemy wiadomości prywatne i spotykamy się co miesiąc, by omawiać efekty.",
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"websites" | "social">("social");
  const options = activeTab === "websites" ? customizationOptions : socialOptions;

  return (
    <section
      id="process"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-wide">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-2 block">
            Proces Tworzenia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ty </span>
            <span className="text-gradient">decydujesz</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {activeTab === "websites"
              ? <>Budowa strony to proces, w którym Twoja wizja jest najważniejsza.<br className="hidden md:block" /> Kliknij kafelki poniżej, aby zobaczyć, jak budujemy Twój sukces.</>
              : <>Obsługa social mediów to przemyślany proces, nie przypadkowe posty.<br className="hidden md:block" /> Kliknij kafelki, aby zobaczyć, jak wygląda nasza współpraca.</>
            }
          </p>
        </div>

        {/* Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 bg-secondary/60 border border-white/10 rounded-full gap-1 shadow-lg">
            <button
              onClick={() => { setActiveTab("websites"); setActiveId(null); }}
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
              onClick={() => { setActiveTab("social"); setActiveId(null); }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {options.map((option) => (
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
