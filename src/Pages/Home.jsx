import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
//import { StarBackground } from "@/Components/StarBackground";
import { Hero } from "@/Components/Hero";
import { About } from "@/Components/About";
import { Projects } from "@/Components/Projects";
import { Certifications } from "@/Components/Certifications";
import { Skills } from "@/Components/Skills";
import { Education } from "@/Components/Education";
import { Experience } from "@/Components/Experience";
import { Contact } from "@/Components/Contact";
import { Footer } from "@/Components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Toggle theme */}
      <ThemeToggle />
      {/* Background effects */}
      {/* <StarBackground /> */}
      {/* Nav bar */}
      <Navbar />
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
