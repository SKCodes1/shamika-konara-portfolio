// // src/components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import {
//   Briefcase,
//   Award,
//   Wrench,
//   GraduationCap,
//   Building2,
//   Mail,
//   Sun,
//   Moon,
// } from "lucide-react";

// function Navbar() {
//   const [active, setActive] = useState("home");
//   const [theme, setTheme] = useState("dark");

//   const navItems = [
//     { name: "Home", id: "home", icon: Building2 },
//     { name: "Projects", id: "projects", icon: Briefcase },
//     { name: "Certifications", id: "certifications", icon: Award },
//     { name: "Skills", id: "skills", icon: Wrench },
//     { name: "Education", id: "education", icon: GraduationCap },
//     { name: "Experience", id: "experience", icon: Building2 },
//     { name: "Contact", id: "contact", icon: Mail },
//   ];

//   useEffect(() => {
//     const handleScrollSpy = () => {
//       navItems.forEach((item) => {
//         const section = document.getElementById(item.id);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom > 100) {
//             setActive(item.id);
//           }
//         }
//       });
//     };
//     window.addEventListener("scroll", handleScrollSpy);
//     return () => window.removeEventListener("scroll", handleScrollSpy);
//   }, [navItems]);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Add this missing function
//   const handleThemeToggle = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//     if (theme === "dark") {
//       document.documentElement.classList.remove("dark");
//     } else {
//       document.documentElement.classList.add("dark");
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[#0B0C10] dark:bg-gray-900 rounded-xl shadow-lg px-8 py-4 flex items-center gap-8 max-w-fit border border-gray-800">
//       {navItems.map((item) => {
//         const isActive = active === item.id;
//         const Icon = item.icon;
//         return (
//           <button
//             key={item.id}
//             onClick={() => handleScroll(item.id)}
//             className={`flex items-center gap-2 text-lg font-medium transition-colors
//               ${isActive ? "text-[#66FCF1]" : "text-gray-200"}
//               hover:text-[#66FCF1] px-2 py-1 rounded`}
//           >
//             <Icon size={20} /> {item.name}
//           </button>
//         );
//       })}
//       <button
//         className="ml-6 p-2 rounded-full hover:bg-gray-800 transition"
//         onClick={handleThemeToggle}
//         aria-label="Toggle theme"
//       >
//         {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//       </button>
//     </nav>
//   );
// }

// export default Navbar;
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          {/* <span className="relative z-10">
            <span className="text-glow text-foreground"> PedroTech </span>{" "}
            Portfolio
          </span> */}
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
