import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Projects = () => {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  useEffect(() => {
    document.title = "Projekty | Twoja Strona, Twoja Historia";
    window.scrollTo(0, 0);
  }, []);

  const nextMobileProject = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % projects.length);
  };

  const prevMobileProject = () => {
    setCurrentMobileIndex(
      (prev) => (prev - 1 + projects.length) % projects.length,
    );
  };

  return (
    <div className="bg-background relative overflow-x-hidden min-h-screen">
      <Navbar />

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-background to-background -z-20" />

      <section className="pt-32 pb-4 container-wide relative z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Wybrane <span className="text-gradient">Realizacje</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
          Zobacz, jak pomagamy naszym klientom osiągać cele biznesowe poprzez
          nowoczesne rozwiązania cyfrowe.
        </p>
      </section>

      <div className="hidden md:block py-20 pb-40">
        <div className="container-wide">
          {projects.map((project, index) => {
            const topOffset = 120 + index * 60;

            return (
              <div
                key={project.id}
                className="sticky"
                style={{
                  top: `${topOffset}px`,

                  marginBottom: "40vh",
                }}
              >
                <div
                  className={`
                    relative overflow-hidden rounded-3xl border border-white/10 
                    bg-[#0a0a0a] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.8)] 
                    transition-all duration-500 will-change-transform
                  `}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${project.color} opacity-10 -z-10`}
                  />

                  <div className="grid grid-cols-12 gap-8 p-12 items-center">
                    <div className="col-span-1 hidden xl:flex justify-center items-start h-full">
                      <span className="text-6xl font-bold text-white/5 font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="col-span-12 xl:col-span-5 lg:col-span-6 space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
                          />
                          <span className="text-sm font-medium tracking-wider text-white/60 uppercase">
                            {project.category}
                          </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 rounded-full text-base h-14 px-8 group mt-4 shadow-lg shadow-white/10"
                      >
                        Zobacz projekt
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div className="col-span-12 xl:col-span-6 lg:col-span-6 h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black/50 group">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden pb-20 container-wide">
        <div className="relative pt-10">
          {projects
            .slice(currentMobileIndex, currentMobileIndex + 1)
            .map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-1 gap-8 animate-fade-in-up"
              >
                <div className="rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/5 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-30 -z-10`}
                  />
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white text-sm font-medium border border-white/10">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-white/90 py-6 rounded-xl text-lg group">
                    Zobacz projekt
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}

          <div className="flex justify-between items-center mt-8 px-4">
            <button
              onClick={prevMobileProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="text-sm text-muted-foreground font-medium">
              {currentMobileIndex + 1} / {projects.length}
            </div>
            <button
              onClick={nextMobileProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
