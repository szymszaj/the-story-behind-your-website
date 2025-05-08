import { Card, CardContent } from "@/components/ui/card";
import {
  LayoutGrid,
  Palette,
  Brush,
  Smartphone,
  Newspaper,
  LayoutList,
} from "lucide-react";

const customizationOptions = [
  {
    id: 1,
    title: "Wybierz swój układ",
    description:
      "Zdecyduj, jak ma być zorganizowana Twoja strona - od prostych układów one-page po złożone struktury wielostronicowe.",
    icon: <LayoutGrid size={48} />,
    category: "Układ",
  },
  {
    id: 2,
    title: "Wybierz swój styl",
    description:
      "Minimalistyczny, elegancki, artystyczny czy może dynamiczny? Dopasujemy wygląd do charakteru Twojej działalności.",
    icon: <Palette size={48} />,
    category: "Styl",
  },
  {
    id: 3,
    title: "Wybierz swój design",
    description:
      "Zdecyduj o kolorystyce, typografii i elementach wizualnych, które najlepiej odzwierciedlą Twoją markę.",
    icon: <Brush size={48} />,
    category: "Design",
  },
  {
    id: 4,
    title: "Responsywność na wszystkich urządzeniach",
    description:
      "Twoja strona będzie idealnie wyglądać zarówno na dużych ekranach komputerów, jak i na smartfonach czy tabletach.",
    icon: <Smartphone size={48} />,
    category: "Funkcjonalność",
  },
  {
    id: 5,
    title: "Wybierz swoje funkcje",
    description:
      "Galerie zdjęć, formularze kontaktowe, mapy, integracje z mediami społecznościowymi - wybierz to, czego potrzebujesz.",
    icon: <LayoutList size={48} />,
    category: "Funkcje",
  },
  {
    id: 6,
    title: "Dostosuj treść",
    description:
      "Pomogę Ci stworzyć treści, które skutecznie opowiedzą historię Twojej marki i przyciągną klientów.",
    icon: <Newspaper size={48} />,
    category: "Treść",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Ty decydujesz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            To Ty masz władzę nad swoją stroną internetową. Wybieraj spośród
            różnych opcji i możliwości, a ja zamienię Twoje preferencje w
            wyjątkową stronę.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customizationOptions.map((option) => (
            <Card
              key={option.id}
              className="bg-secondary/40 border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-secondary/80 flex items-center justify-center">
                {option.icon}
              </div>
              <CardContent className="p-6">
                <div className="text-xs font-medium text-muted-foreground mb-2">
                  {option.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
