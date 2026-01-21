import { ArrowUp, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    menu: [
      { name: "Strona Główna", href: "/" },
      { name: "O mnie", href: "/#about" },
      { name: "Projekty", href: "/projects" },
      { name: "Proces", href: "/#process" },
      { name: "Cennik", href: "/#pricing" },
    ],
    social: [
      {
        name: "GitHub",
        icon: <Github size={20} />,
        href: "https://github.com",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com",
      },
    ],
    contact: [
      {
        icon: <Phone size={16} />,
        text: "+48 695 615 115",
        href: "tel:+48695615115",
      },
      {
        icon: <Mail size={16} />,
        text: "visionboost321@gmail.com",
        href: "mailto:visionboost321@gmail.com",
      },
      { icon: <MapPin size={16} />, text: "Warszawa, Polska", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-white/5 bg-background pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-20" />

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="block">
              <span className="text-xl font-bold text-white block">
                Twoja Strona,
              </span>
              <span className="text-xl font-bold text-gradient block">
                Twoja Historia
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Tworzymy nowoczesne strony internetowe, które przyciągają uwagę i
              generują wyniki. Twoja wizja, nasze wykonanie.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/5 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Menu</h3>
            <ul className="space-y-4">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-indigo-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Kontakt</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors text-sm group"
                  >
                    <span className="p-2 rounded-lg bg-white/5 text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
              Zacznijmy projekt
            </h3>
            <p className="text-sm text-muted-foreground mb-6 relative z-10">
              Gotowy aby wynieść swój biznes na wyższy poziom?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-transform active:scale-95 relative z-10"
            >
              Wyceń projekt
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Twoja Strona, Twoja Historia. Wszelkie prawa
            zastrzeżone.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors px-4 py-2 rounded-full border border-white/5 hover:bg-white/5"
          >
            <span>Wróć do góry</span>
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
