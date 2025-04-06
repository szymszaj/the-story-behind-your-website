
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Kontakt</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Masz pytania? Chcesz omówić swój projekt? Skontaktuj się ze mną,
            a odpowiem najszybciej jak to możliwe.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <a 
              href="tel:+48695615115" 
              className="flex flex-col items-center p-6 bg-secondary/40 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <Phone size={32} className="mb-4 text-primary" />
              <h3 className="text-lg font-medium mb-2">Telefon</h3>
              <p className="text-muted-foreground">+48 695 615 115</p>
            </a>
            
            <a 
              href="mailto:szymonzych868@gmail.com" 
              className="flex flex-col items-center p-6 bg-secondary/40 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <Mail size={32} className="mb-4 text-primary" />
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-muted-foreground">szymonzych868@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
