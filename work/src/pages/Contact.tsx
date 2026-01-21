import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Imię musi mieć co najmniej 2 znaki.",
  }),
  email: z.string().email({
    message: "Proszę podać poprawny adres e-mail.",
  }),
  subject: z.string().min(5, {
    message: "Temat musi mieć co najmniej 5 znaków.",
  }),
  message: z.string().min(10, {
    message: "Wiadomość musi mieć co najmniej 10 znaków.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    document.title = "Kontakt | VisionBoost - Skontaktuj się z nami";
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      console.log("Form values:", values);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Wiadomość została wysłana!", {
        description: "Skontaktujemy się z Tobą najszybciej jak to możliwe.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Wystąpił błąd.", {
        description:
          "Spróbuj ponownie później lub skontaktuj się z nami telefonicznie.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background elements */}
      <div className="fixed inset-0 bg-background -z-20" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background -z-10" />

      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-xl mx-auto md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Information Column */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  <span className="text-white">Porozmawiajmy o</span>
                  <br />
                  <span className="text-gradient">Twoim projekcie</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Jesteśmy gotowi, aby przekuć Twoją wizję w rzeczywistość.
                  Skontaktuj się z nami, aby omówić szczegóły współpracy.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+48 695 615 115</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pon - Pt, 9:00 - 17:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      visionboost321@gmail.com
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Odpowiadamy w ciągu 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Lokalizacja</h3>
                    <p className="text-muted-foreground">Warszawa, Polska</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Obsługujemy klientów globalnie
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h3 className="text-white font-medium mb-4">
                  Znajdź nas w social mediach
                </h3>
                <div className="flex gap-4">
                  {[Github, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-indigo-500 hover:text-white transition-all duration-300 border border-white/5 hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="glass-card p-6 md:p-8 rounded-2xl animate-fade-in-up delay-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Wyślij wiadomość
                </h2>
                <p className="text-muted-foreground text-sm">
                  Wypełnij formularz, a my zajmiemy się resztą.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Imię i Nazwisko
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jan Kowalski"
                            className="bg-white/5 border-white/10 focus:border-indigo-500 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jan@example.com"
                            className="bg-white/5 border-white/10 focus:border-indigo-500 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Temat</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="W sprawie projektu..."
                            className="bg-white/5 border-white/10 focus:border-indigo-500 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Wiadomość</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Opisz swój projekt lub zadaj pytanie..."
                            className="bg-white/5 border-white/10 focus:border-indigo-500 text-white min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-white/90 font-medium py-6 text-lg"
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
