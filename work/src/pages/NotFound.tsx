import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090B]">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 relative">
        <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-[#232135]/80 via-[#13131a]/70 to-[#09090B] opacity-80" />
        <div className="relative z-10 p-10 md:p-14 bg-white/5 rounded-2xl shadow-2xl backdrop-blur-lg max-w-lg w-full border border-white/10 glass-morphism flex flex-col items-center">
          <span className="block text-7xl md:text-8xl font-extrabold text-white drop-shadow-glow mb-2 animate-pulse">
            404
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow">
            Ups! Strona nie istnieje
          </h1>
          <p className="text-muted-foreground text-lg mb-8 text-gray-300">
            Nie udało się znaleźć podanej strony.
            <br />
            Sprawdź adres lub wróć na stronę główną.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#7e69ab] to-[#9b87f5] text-white hover:scale-105 transition-transform shadow-lg"
          >
            Wróć do strony głównej
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
