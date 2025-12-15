// src/App.css
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
// import Skills from "./components/Skills";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
// import Contact from "./Components/Contact";
// import Footer from "./components/Footer";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "@/Components/ui/toaster";

// function App() {
//   return (
//     <div className="bg-[#0a0f1b] text-white min-h-screen scroll-smooth">
//       <Navbar />
//       <Hero />
//       <Projects />
//       <Certifications />
//       <Skills />
//       <Education />
//       <Experience />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
