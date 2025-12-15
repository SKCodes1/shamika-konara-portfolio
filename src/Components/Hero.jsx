import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">Shamika</span>{" "}
            <span className="text-gradient">Konara</span>
          </h1>

          {/* TYPEWRITER ROLES */}
          <p className="text-2xl md:text-3xl font-semibold text-primary">
            <Typewriter
              words={[
                "a Data Engineer",
                "a Problem Solver",
                "a Cloud & IoT Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </p>

          <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
            I design robust data engineering pipelines and cloud architectures,
            with IoT integrations that deliver real-time, intelligent insights.
          </p>

          <a href="#projects" className="cosmic-button inline-block">
            View My Projects
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/profile.png"
            alt="Shamika Konara"
            className="
      w-full max-w-sm md:max-w-md
      h-auto
      object-contain
      drop-shadow-xl
    "
          />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
