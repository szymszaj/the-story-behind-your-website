import {
  Code2,
  Rocket,
  Users,
  FileCode2,
  Database,
  Globe,
  Palette,
  Brush,
} from "lucide-react";

const About = () => {
  const techStack = [
    {
      name: "React",
      icon: <Code2 size={40} className="text-[#61DAFB]" />,
      position: "top-10 left-10",
      delay: "0s",
    },
    {
      name: "TypeScript",
      icon: <FileCode2 size={40} className="text-[#3178C6]" />,
      position: "top-20 right-20",
      delay: "2s",
    },
    {
      name: "Tailwind",
      icon: <Palette size={40} className="text-[#38B2AC]" />,
      position: "bottom-32 left-1/4",
      delay: "4s",
    },
    {
      name: "Node.js",
      icon: <Database size={40} className="text-[#339933]" />,
      position: "top-1/2 right-10",
      delay: "1s",
    },
    {
      name: "Next.js",
      icon: <Globe size={40} className="text-white" />,
      position: "bottom-10 right-1/4",
      delay: "3s",
    },
    {
      name: "Design",
      icon: <Brush size={40} className="text-[#F95E9F]" />,
      position: "top-32 left-1/2",
      delay: "5s",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
              O mnie
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Tworzę cyfrowe doświadczenia, które <br />
              <span className="text-gradient">zapadają w pamięć.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cześć! Jestem Szymon, Front-end Developer z pasją do tworzenia
              nowoczesnych, interaktywnych stron internetowych. Specjalizuję się
              w React i ekosystemie JavaScript, łącząc techniczną precyzję z
              wyczuciem estetyki.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nie buduję tylko "stron". Tworzę narzędzia, które pomagają markom
              rosnąć, sprzedawać i komunikować się ze swoimi klientami w
              skuteczny sposób.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/5">
                  <Code2 size={24} />
                </div>
                <h3 className="font-semibold text-white">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Czysty i skalowalny kod to podstawa.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/5">
                  <Rocket size={24} />
                </div>
                <h3 className="font-semibold text-white">Wydajność</h3>
                <p className="text-sm text-muted-foreground">
                  Szybkość ładowania jest priorytetem.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/5">
                  <Users size={24} />
                </div>
                <h3 className="font-semibold text-white">UX Design</h3>
                <p className="text-sm text-muted-foreground">
                  Koncentracja na użytkowniku.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] w-full flex items-center justify-center">
            {/* Contextual Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 blur-[60px] rounded-full" />

            {/* <div className="relative z-10 w-32 h-32 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-pulse">
              <span className="text-sm font-bold text-white tracking-widest">
                TECH
              </span>
            </div> */}

            {techStack.map((item) => (
              <div
                key={item.name}
                className={`absolute ${item.position} p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl animate-float-slow hover:scale-110 transition-transform cursor-pointer group`}
                style={{ animationDelay: item.delay }}
              >
                <div className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
