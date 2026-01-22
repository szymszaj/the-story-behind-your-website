import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
    effect: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Zapytanie projektowe od: ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Imię: ${formData.name}\nEmail: ${formData.email}\n\nPomysł na stronę: ${formData.idea}\n\nPożądany efekt: ${formData.effect}`,
    );

    window.location.href = `mailto:szymonzych936@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Otwieram klienta poczty...",
      description: "Dokończ wysyłanie wiadomości w swojej aplikacji mailowej.",
    });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <ParticleBackground />

      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group z-10"
      >
        <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
          <ArrowLeft size={20} />
        </div>
        <span className="font-medium">Wróć do strony głównej</span>
      </Link>

      <div className="w-full max-w-4xl relative z-10 animate-fade-in-up">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rozpocznijmy <span className="text-gradient">coś wielkiego</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wypełnij krótki formularz, abyśmy mogli lepiej zrozumieć Twoje
            potrzeby. To pierwszy krok do stworzenia strony, która wyróżni Cię z
            tłumu.
          </p>
        </div>

        <Card className="glass-card border-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-50" />

          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-indigo-200 ml-1"
                  >
                    Twoje imię / Firma
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jan Kowalski / Firma Sp. z o.o."
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/20 border-white/10 focus:border-indigo-500/50 min-h-[50px] text-lg placeholder:text-white/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-indigo-200 ml-1"
                  >
                    Adres email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jan@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/20 border-white/10 focus:border-indigo-500/50 min-h-[50px] text-lg placeholder:text-white/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="idea"
                  className="flex items-center gap-2 text-sm font-medium text-indigo-200 ml-1"
                >
                  <Sparkles size={14} className="text-indigo-400" />
                  Twój pomysł na stronę
                </label>
                <Textarea
                  id="idea"
                  name="idea"
                  placeholder="Opisz czym zajmuje się Twoja firma, jaki produkt/usługę chcesz promować..."
                  value={formData.idea}
                  onChange={handleChange}
                  className="bg-black/20 border-white/10 focus:border-indigo-500/50 min-h-[120px] text-base placeholder:text-white/20 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="effect"
                  className="text-sm font-medium text-indigo-200 ml-1"
                >
                  Oczekiwany efekt
                </label>
                <Textarea
                  id="effect"
                  name="effect"
                  placeholder="Jakie cele ma spełniać strona? (np. sprzedaż, wizerunek, portfolio)"
                  value={formData.effect}
                  onChange={handleChange}
                  className="bg-black/20 border-white/10 focus:border-indigo-500/50 min-h-[120px] text-base placeholder:text-white/20 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 text-lg font-medium py-6 rounded-xl transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <Send size={18} className="mr-2" />
                Wyślij zapytanie
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quote;
