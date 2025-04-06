
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <a
              href="#home"
              className="text-xl font-bold text-gradient tracking-tight"
            >
              Twoja Strona, Twoja Historia
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Tworzę strony internetowe, które opowiadają Twoją historię.
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Twoja Strona, Twoja Historia. Wszelkie prawa zastrzeżone.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Do góry</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
