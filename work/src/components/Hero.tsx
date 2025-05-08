import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full relative flex items-center justify-center pt-16"
    >
      <div className="container-wide flex flex-col items-center justify-center text-center z-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gradient">
          Tworzę strony internetowe, które <br className="hidden sm:block" />
          opowiadają Twoją historię
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Potrzebujesz strony, która nie tylko wygląda dobrze, ale mówi coś o
            Tobie, Twojej marce, firmie czy wydarzeniu? Właśnie tym się zajmuję.
          </p>

          <div className="glass-morphism p-6 md:p-8 rounded-lg max-w-3xl mx-auto text-left space-y-4 animate-pulse-slow">
            <p className="text-foreground">
              Projektuję i buduję nowoczesne, responsywne strony internetowe dla
              ludzi z różnych światów – od właścicieli apartamentów, przez małe
              biznesy, po przyszłe pary młode.
            </p>

            <p className="text-foreground">
              Zamieniam pomysły w unikalne strony, które:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>pokazują ofertę w najlepszym świetle,</li>
              <li>
                opowiadają o produkcie lub usłudze tak, że chce się z niej
                skorzystać,
              </li>
              <li>pomagają budować zaufanie i przyciągają klientów.</li>
            </ul>

            <p className="text-foreground">
              Niezależnie czy chcesz wypromować hotel, pokazać ręcznie robione
              produkty, zaprosić gości na ślub w nietypowy sposób czy po prostu
              chcesz profesjonalnie zaistnieć w sieci — pomogę Ci stworzyć
              stronę, która będzie nie tylko ładna, ale też funkcjonalna.
            </p>

            <p className="text-lg font-medium mt-4">
              Twoja branża – moja inspiracja.
              <br />
              Twoja historia – moja misja.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Zobacz jak zacząć</span>
              <ArrowDown size={16} className="animate-float" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
