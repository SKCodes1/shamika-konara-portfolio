// src/components/Education.jsx

const educationData = [
  {
    institution: "University of Sri Jayewardenepura",
    degree: "B.Tech Hons in Mechatronics",
    year: "2021–2026 Jan",
    GPA: "3.5 (Graduate on Jan 2026)",
  },
  {
    institution: "SLTC Research University",
    degree: "B.Sc. Hons in Information Technology (Data Science)",
    year: "2021–2025",
    GPA: "3.6",
  },

  {
    institution: "Ananda College, Colombo 10",
    degree:
      "GCE A/L Examination: A.A.B with 2.64 in Science for Technology, Engineering for Technology, and ICT",
    year: "2017–2021",
  },
];

export const Education = () => {
  //function Education() {
  return (
    <section id="education" className="py-20 px-10 text-center">
      <h2
        className="text-4xl font-bold mb-10 
        animate-fade-in text-primary"
      >
        Education
      </h2>
      {/* Center the whole timeline section */}
      <div className="flex justify-center">
        <div className="relative border-l border-primary/50 ml-4 space-y-12 max-w-6xl w-full">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-10 animate-fade-in">
              {/* Timeline Dot */}
              <div className="absolute left-[-7px] top-1 w-4 h-4 bg-primary rounded-full border border-primary-foreground shadow-md"></div>

              {/* Card */}
              <div className="p-6 rounded-xl backdrop-blur-lg bg-white/5 dark:bg-white/5 gradient-border card-hover">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-sm opacity-70">{edu.year}</p>
                </div>

                <p
                  className={`mt-1 opacity-90 ${
                    index < 2 ? "text-primary" : ""
                  }`}
                >
                  {edu.degree}
                </p>

                {edu.GPA && <p className="mt-2 teopacity-90">GPA: {edu.GPA}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//export default Education;
