// // // src/components/Skills.jsx
// // function Skills() {
// //   return (
// //     <section id="skills" className="py-20 px-10 text-center">
// //       <h2 className="text-3xl font-bold text-blue-400 mb-6">Skills</h2>
// //       <p className="text-gray-300 max-w-2xl mx-auto">
// //         Proficient in JavaScript, React, Tailwind CSS, Node.js, and Python.
// //       </p>
// //     </section>
// //   );
// // }

// // //export default Skills;
// // import { useState } from "react";
// // import { cn } from "@/lib/utils";

// // const skills = [
// //   // Frontend
// //   { name: "HTML/CSS", level: 95, category: "frontend" },
// //   { name: "JavaScript", level: 90, category: "frontend" },
// //   { name: "React", level: 90, category: "frontend" },
// //   { name: "TypeScript", level: 85, category: "frontend" },
// //   { name: "Tailwind CSS", level: 90, category: "frontend" },
// //   { name: "Next.js", level: 80, category: "frontend" },

// //   // Backend
// //   { name: "Node.js", level: 80, category: "backend" },
// //   { name: "Express", level: 75, category: "backend" },
// //   { name: "MongoDB", level: 70, category: "backend" },
// //   { name: "PostgreSQL", level: 65, category: "backend" },
// //   { name: "GraphQL", level: 60, category: "backend" },

// //   // Tools
// //   { name: "Git/GitHub", level: 90, category: "tools" },
// //   { name: "Docker", level: 70, category: "tools" },
// //   { name: "Figma", level: 85, category: "tools" },
// //   { name: "VS Code", level: 95, category: "tools" },
// // ];

// // const categories = ["all", "iot", "backend", "tools"];

// // export const Skills = () => {
// //   const [activeCategory, setActiveCategory] = useState("all");

// //   const filteredSkills = skills.filter(
// //     (skill) => activeCategory === "all" || skill.category === activeCategory
// //   );
// //   return (
// //     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
// //       <div className="container mx-auto max-w-5xl">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
// //           My <span className="text-primary"> Skills</span>
// //         </h2>

// //         <div className="flex flex-wrap justify-center gap-4 mb-12">
// //           {categories.map((category, key) => (
// //             <button
// //               key={key}
// //               onClick={() => setActiveCategory(category)}
// //               className={cn(
// //                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
// //                 activeCategory === category
// //                   ? "bg-primary text-primary-foreground"
// //                   : "bg-secondary/70 text-forefround hover:bd-secondary"
// //               )}
// //             >
// //               {category}
// //             </button>
// //           ))}
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {filteredSkills.map((skill, key) => (
// //             <div
// //               key={key}
// //               className="bg-card p-6 rounded-lg shadow-xs card-hover"
// //             >
// //               <div className="text-left mb-4">
// //                 <h3 className="font-semibold text-lg"> {skill.name}</h3>
// //               </div>
// //               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
// //                 <div
// //                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
// //                   style={{ width: skill.level + "%" }}
// //                 />
// //               </div>

// //               <div className="text-right mt-1">
// //                 <span className="text-sm text-muted-foreground">
// //                   {skill.level}%
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );

// export const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       items: ["Python", "SQL", "R"],
//     },
//     {
//       title: "Big Data & ETL/ELT Tools",
//       items: ["Airflow", "DBT", "Kafka", "Spark"],
//     },
//     {
//       title: "Cloud Platforms",
//       items: ["AWS", "GCP", "Azure"],
//     },
//     {
//       title: "IoT Protocols & Communication",
//       items: [
//         "MQTT (TLS 1.2, X.509)",
//         "CoAP",
//         "ESP-NOW",
//         "HTTP/REST APIs",
//         "UART",
//         "SPI",
//         "I2C",
//       ],
//     },
//     {
//       title: "Data Analytics & Visualization",
//       items: ["Power BI", "Grafana", "Prometheus", "Tableau (Basics)"],
//     },
//     {
//       title: "DevOps & Containerization",
//       items: [
//         "Docker",
//         "Kubernetes (GKE)",
//         "Docker Compose",
//         "Jenkins",
//         "GitHub Actions",
//         "CI/CD Pipelines",
//       ],
//     },
//     {
//       title: "Data Science & Machine Learning",
//       items: [
//         "Scikit-learn",
//         "TensorFlow",
//         "Pandas",
//         "NumPy",
//         "Genetic Algorithms",
//       ],
//     },
//     {
//       title: "Orchestration & Messaging",
//       items: ["Apache Airflow", "Node-RED", "MQTT"],
//     },
//     {
//       title: "Databases & Data Warehousing",
//       items: ["Snowflake", "PostgreSQL", "MariaDB", "InfluxDB", "DynamoDB"],
//     },
//     {
//       title: "Other Tools",
//       items: ["GitHub", "Linux", "Postman", "SODA", "Flask", "Streamlit"],
//     },
//   ];

//   return (
//     <div className="skills-container px-8 py-20 bg-[#0A0F1F] text-white">
//       <h2 className="text-3xl" font-bold mb-10 text-center>
//         Skills
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {skillCategories.map((category, index) => (
//           <div
//             key={index}
//             className="bg-[#0F1629] p-6 rounded-2xl shadow-lg border border-gray-700"
//           >
//             <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
//             <div className="flex flex-wrap gap-3">
//               {category.items.map((item, i) => (
//                 <span
//                   key={i}
//                   className="bg-[#1A2337] px-3 py-1 rounded-full text-sm border border-gray-600"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";
import {
  Code,
  Workflow,
  Cloud,
  Cpu,
  BarChart3,
  Boxes,
  Brain,
  Database,
  Hammer,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={22} />,
    items: ["Python", "SQL", "R"],
  },
  {
    title: "Big Data & ETL/ELT Tools",
    icon: <Workflow size={22} />,
    items: ["Airflow", "DBT", "Kafka", "Spark"],
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud size={22} />,
    items: ["AWS", "GCP", "Azure"],
  },
  {
    title: "IoT Protocols & Communication",
    icon: <Cpu size={22} />,
    items: [
      "MQTT (TLS 1.2, X.509)",
      "CoAP",
      "ESP-NOW",
      "HTTP/REST APIs",
      "UART",
      "SPI",
      "I2C",
    ],
  },
  {
    title: "Data Analytics & Visualization",
    icon: <BarChart3 size={22} />,
    items: ["Power BI", "Grafana", "Prometheus", "Tableau (Basics)"],
  },
  {
    title: "DevOps & Containerization",
    icon: <Boxes size={22} />,
    items: [
      "Docker",
      "Kubernetes (GKE)",
      "Docker Compose",
      "GitHub Actions",
      "Jenkins",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    icon: <Brain size={22} />,
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Genetic Algorithms",
    ],
  },
  {
    title: "Orchestration & Messaging",
    icon: <Workflow size={22} />,
    items: ["Apache Airflow", "Node-RED", "MQTT"],
  },

  {
    title: "Databases & Data Warehousing",
    icon: <Database size={22} />,
    items: ["Snowflake", "PostgreSQL", "MariaDB", "InfluxDB", "DynamoDB"],
  },
  {
    title: "Other Tools",
    icon: <Hammer size={22} />,
    items: ["GitHub", "Linux", "Postman", "SODA", "Flask", "Streamlit"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 container">
      <h2
        className="
        text-4xl font-bold mb-10 
        animate-fade-in text-primary
      "
      >
        Skills & Expertise
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="
              p-6 rounded-2xl 
              backdrop-blur-md 
              bg-white/10 dark:bg-white/5 
              border border-white/20 
              shadow-lg 
              card-hover 
              gradient-border
              animate-fade-in
            "
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary">{category.icon}</span>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 
                    rounded-full 
                    text-sm 
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
