// src/components/Experience.jsx
// export const Experience = () => {
//   //function Experience() {
//   return (
//     <section id="experience" className="py-20 px-10 text-center">
//       <h2
//         className="text-4xl font-bold mb-10
//         animate-fade-in text-primary"
//       >
//         Experience
//       </h2>
//       <p className="text-gray-300 max-w-2xl mx-auto">
//         {/* Worked on multiple tech projects and internships, focusing on web
//         development and AI. */}
//       </p>
//     </section>
//   );
// };

//export default Experience;
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const experienceData = [
  {
    role: "Data Analyst Intern",
    company: "—", // optional (add company name if needed)
    period: "Oct 2024 – Apr 2025",
    highlights: [
      "Built 15+ advanced Power BI dashboards including PDCA Trigger, KPI Monitoring, Cost of Quality, and Checker EPF dashboards to support data-driven decision making.",
      "Developed complex DAX measures to solve real-world business analytics problems.",
      "Integrated Power Apps into analytical workflows, enabling interactive dashboards and seamless data input across cross-functional teams.",
      "Designed and implemented robust data pipelines using Microsoft Fabric for efficient data ingestion and preparation.",
    ],
    tech: [
      "Power BI",
      "DAX",
      "Power Apps",
      "Microsoft Fabric",
      "Data Pipelines",
      "Analytics",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 container">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-10 text-primary animate-fade-in">
        Experience
      </h2>

      <div className="space-y-10">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="
              p-6 md:p-8 rounded-2xl
              border border-white/20
              shadow-lg
              card-hover
              gradient-border
              animate-fade-in
            "
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  {exp.company && (
                    <p className="text-sm opacity-70">{exp.company}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm opacity-80">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-4 mb-6 text-left">
              {exp.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="opacity-90 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((item, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-sm rounded-full
                    bg-background/40
                    border border-border
                    backdrop-blur-sm
                    hover:scale-105
                    transition-transform
                    duration-200
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
