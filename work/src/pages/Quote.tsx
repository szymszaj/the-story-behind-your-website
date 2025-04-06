
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import ParticleBackground from "@/components/ParticleBackground";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    idea: "",
    effect: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construct the mailto URL with the form data in the body
    const subject = encodeURIComponent("Zapytanie o wycenę strony internetowej");
    const body = encodeURIComponent(
      `Pomysł na stronę: ${formData.idea}\n\nPożądany efekt: ${formData.effect}`
    );
    
    window.location.href = `mailto:kontakt@example.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Przekierowuję do formularza email",
      description: "Twoje zapytanie zostanie wysłane przez Twojego klienta pocztowego."
    });
  };

  return (
    <div className="min-h-screen relative bg-background">
      <ParticleBackground />
      <div className="container-wide py-20">
        <a 
          href="/" 
          className="absolute top-8 left-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Powrót do strony głównej
        </a>
        
        <div className="max-w-3xl mx-auto pt-16">
          <Card className="bg-secondary/40 border-white/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gradient">Wyceń swój projekt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-center">
                Opisz swój pomysł na stronę oraz pożądany efekt, a my przygotujemy dla Ciebie indywidualną wycenę.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="idea" className="text-sm font-medium">
                    Twój pomysł na stronę
                  </label>
                  <Textarea
                    id="idea"
                    name="idea"
                    placeholder="Opisz czym zajmuje się Twoja firma, jaki produkt/usługę chcesz promować..."
                    value={formData.idea}
                    onChange={handleChange}
                    className="bg-secondary/60 border-white/10 min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="effect" className="text-sm font-medium">
                    Pożądany efekt
                  </label>
                  <Textarea
                    id="effect"
                    name="effect"
                    placeholder="Jakie efekty chciałbyś osiągnąć dzięki stronie? Jakie są Twoje oczekiwania?"
                    value={formData.effect}
                    onChange={handleChange}
                    className="bg-secondary/60 border-white/10 min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Wyślij zapytanie
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quote;
