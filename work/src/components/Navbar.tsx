import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "@/data/navItems";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const elementId = href.replace("/#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out transform",
        scrolled ? "glass-morphism py-3" : "bg-transparent py-6",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight md:text-2xl group flex items-center gap-2"
        >
          <span className="text-white group-hover:text-white/80 transition-colors">
            Twoja Strona,
          </span>
          <span className="text-gradient">Twoja Historia</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.name === "Kontakt" ? (
              <Link
                key={item.name}
                to={item.href}
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 text-sm font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full opacity-50" />
              </Link>
            ),
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground p-2 hover:bg-white/5 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-morphism animate-fade-in-up border-t border-white/10">
          <div className="container-wide flex flex-col py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-lg font-medium px-4 py-3 rounded-lg transition-colors",
                  item.name === "Kontakt"
                    ? "bg-white/10 text-white text-center mt-2 border border-white/5 hover:bg-white/15"
                    : "text-muted-foreground hover:text-white hover:bg-white/5",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
