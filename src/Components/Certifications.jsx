// src/components/Certifications.jsx

const certifications = [
  {
    title: "IBM Data Analyst",
    provider: "IBM",
    year: "2024",
    courses: "11 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/ibm-data-analyst.pdf",
  },

  {
    title: "IBM Data Science",
    provider: "IBM",
    year: "2025",
    courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/ibm-data-science.pdf",
  },

  {
    title: "Introduction to Relational Databases (RDBMS)",
    provider: "IBM",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/introduction-to-relational-databases.pdf",
  },
  {
    title: "Introduction to Data Engineering",
    provider: "IBM",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/introduction-to-dataengineering.pdf",
  },

  {
    title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
    provider: "IBM",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/etl-and-data-pipelines-with-shell-airflow-and-kafka.pdf",
  },

  {
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    provider: "IBM",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/hands-on-introduction-to-linux-commands-and-shell-scripting.pdf",
  },

  {
    title: "Relational Database Administration (DBA)",
    provider: "IBM",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/relational-database-administration.pdf",
  },
  {
    title: "Data Warehouse Fundamentals",
    provider: "IBM",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/data-warehouse-fundamentals.pdf",
  },

  {
    title: "From Wire to PLC, A Bootcamp in Industrial Automation",
    provider: "IBM",
    year: "2024",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/bootcamp-in-industrial-automation.pdf",
  },

  {
    title: "Fundamentals of Robotics & Industrial Automation",
    provider: "L&T Edutech",
    year: "2024",
    //courses: "12 courses",
    logo: "/Certifications/ltedutech.png",
    pdf: "/Certificates/fundamentals-of-robotics-and-industrial-automation.pdf",
  },

  {
    title: "Data Visualization with MS Power BI",
    provider: "Informatics Institute of Technology",
    year: "2024",
    //courses: "12 courses",
    logo: "/Certifications/iit.png",
    pdf: "/Certificates/iit-power-bi.pdf",
  },
  {
    title: "Microsoft Fabric - The Complete Guide",
    provider: "Udemy",
    year: "2024",
    //courses: "12 courses",
    logo: "/Certifications/udemy.png",
    pdf: "/Certificates/microsoft-fabric.pdf",
  },
  {
    title: "Six Sigma Principles",
    provider: "Kennesaw State University",
    year: "2024",
    //courses: "12 courses",
    logo: "/Certifications/kennesaw.png",
    pdf: "/Certificates/six-sigma.pdf",
  },
  {
    title: "Requirements Elicitation for Business Analysts: Interviews",
    provider: "Linkedin Learning",
    year: "2024",
    //courses: "12 courses",
    logo: "/Certifications/linkedin-learning.png",
    pdf: "/Certificates/requirements-elicitation-for-business-analysts-interviews.pdf",
  },
  {
    title: " Snowflake Platform Training - APAC",
    provider: "Snowfalake",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/snowflake.png",
    pdf: "/Certificates/snowflake.pdf",
  },

  {
    title: "Astronomer Certification for Apache Airflow 3 Fundamentals",
    provider: "Astronomer",
    year: "2025",
    //courses: "12 courses",
    logo: "/Certifications/astronomer.png",
    pdf: "/Certificates/AstronomerCertificationforApacheAirflow3Fundamentals_Badge20251213-32-lkcjta.pdf",
  },
  {
    title: "Data Visualization & Dashboard Essentials",
    provider: "IBM",
    year: "2024",
    //courses: "12 courses",
    logo: "/Certifications/ibm.png",
    pdf: "/Certificates/Data Visualization & Dashboard Essentials.pdf",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 container">
      <h2 className="text-4xl font-bold mb-10 text-primary animate-fade-in">
        Certifications
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-6 rounded-2xl 
              backdrop-blur-md 
              bg-white/10 dark:bg-white/5 
              border border-white/20 
              shadow-lg 
              card-hover 
              gradient-border
              animate-fade-in
              block
            "
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl p-2 flex items-center justify-center">
                <img
                  src={cert.logo}
                  alt={cert.provider}
                  className=" w-full h-full object-contain"
                />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-md font-semibold opacity-70 text-primary">
                  {cert.provider}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between text-sm opacity-80 mt-4">
              <span className="px-3 py-1 rounded-full bg-background/40 border border-border">
                {cert.year}
              </span>
              <span>{cert.courses}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
