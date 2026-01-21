import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white group">
          Gotowy na rozpoczęcie <br />
          <span className="text-gradient">współpracy?</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          Skontaktuj się z nami i omówmy, jak możemy pomóc Ci osiągnąć Twoje
          cele biznesowe. Twój sukces jest naszym priorytetem.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        >
          Skontaktuj się z nami
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
