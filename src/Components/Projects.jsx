import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ImageCarousel from "@/Components/ImageCarousel";

const projects = [
  {
    id: 1,
    title:
      "Production-Grade IoT Environmental Monitoring Platform with AWS & ML",
    description:
      "Real-time IoT air quality monitoring system with automated data pipelines, ML predictions, and interactive dashboards.",
    images: [
      "/Projects/project1/project1.png",
      "/Projects/project1/project1_2.png",
      // "/Projects/project1/project1_3.png",
    ],
    tags: [
      "AWS",
      "Apache Airflow",
      "Docker Compose",
      "MQTT",

      "XGBoost",
      "Python",
      "Grafana",
      "InfluxDB",

      "MariaDB",
      "SQL",
      "Node RED",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/SKCodes1/AirQualityProject",
  },
  {
    id: 2,
    title: "YouTube Data Pipeline using Air flow, Docker, and PostgreSQL",
    description:
      "ML pipeline for survival prediction with automated workflows, real-time drift detection, monitoring dashboards, and interactive web interface.",
    images: [
      "/Projects/project2/project2.png",
      "/Projects/project2/project2_2.PNG",
      "/Projects/project2/project2_3.PNG",
      "/Projects/project2/project2_4.PNG",
      "/Projects/project2/project2_5.PNG",
      "/Projects/project2/project2_6.PNG",
      "/Projects/project2/project2_7.PNG",
      "/Projects/project2/project2_8.PNG",
    ],
    tags: [
      "Python",
      "PostgreSQL",
      "Docker",
      "Apache Airflow",
      "pytest",
      "YouTube API",
      "Postman",
      "SODA",
      "GitHub Actions",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/SKCodes1/Youtube_Project-Docker-Airflow-Git",
  },
  {
    id: 3,
    title: "Hotel Reservation Prediction using MLOps on Google Cloud",
    description:
      "MLOps pipeline for hotel cancellation prediction with automated training, CI/CD deployment, real-time inference, and experiment tracking.",
    images: [
      "/Projects/project3/project3.png",
      "/Projects/project3/project3_2.png",
      "/Projects/project3/project3_3.png",
      "/Projects/project3/project3_4.png",
      "/Projects/project3/project3_5.png",
      "/Projects/project3/project3_6.png",
      "/Projects/project3/project3_7.png",
      "/Projects/project3/project3_8.png",
      "/Projects/project3/project3_9.png",
      "/Projects/project3/project3_10.png",
    ],
    tags: [
      "Python",
      "Flask",
      "MLflow",
      "Docker",
      "Jenkins",
      "GCP",
      "Scikit-learn",
      "Pandas",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/SKCodes1/HotelReservationML",
  },

  {
    id: 4,
    title: "Cloud-Native CI/CD Pipeline for Weather Prediction App on GKE",
    description:
      "Automated CI/CD pipeline for weather prediction app with containerized deployment, zero-downtime updates, and scalable cloud infrastructure.",
    images: [
      "/Projects/project4/project4.png",
      "/Projects/project4/project4_2.png",
      "/Projects/project4/project4_3.png",
      "/Projects/project4/project4_4.png",
      "/Projects/project4/project4_5.png",
      "/Projects/project4/project4_6.png",
      "/Projects/project4/project4_7.png",
    ],
    tags: [
      "GitHub Actions",
      "Docker",
      "Google Artifact Registry",
      "Python",
      "Flask",
      "Kubernetes (GKE)",
      "ML",
      "YAML",
      "GCP IAM & Security",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/SKCodes1/WeatherPredictionSys",
  },

  {
    id: 5,
    title: "BTC Whale Alert Analytics using DBT, Snowflake & Power BI",
    description:
      "Automated CI/CD pipeline for weather prediction app with containerized deployment, zero-downtime updates, and scalable cloud infrastructure.",
    images: [
      "/Projects/project5/project5.png",
      "/Projects/project5/project5_2.png",
      "/Projects/project5/project5_3.png",
      "/Projects/project5/project5_4.png",
      "/Projects/project5/project5_5.png",
      "/Projects/project5/project5_6.png",
      "/Projects/project5/project5_7.png",
      "/Projects/project5/project5_8.png",
      "/Projects/project5/project5_9.png",
    ],
    tags: [
      "DBT",
      "Snowflake",
      "Power BI",
      "GitHub Actions",
      "SQL",
      "Python",
      "AWS S3",
    ],
    demoUrl: "#",
    githubUrl: null,
  },

  {
    id: 6,
    title:
      "Smart Squad Selection: Data-Driven Optimization of Sri Lanka's T20I Team Final Year Research Project",
    description:
      "Data-driven cricket team selection system using performance analytics, predictive modeling, and fan insights for optimal squad composition.",
    images: [
      "/Projects/project6/project6.png",
      // "/Projects/project6/project6_2.png",
      // "/Projects/project6/project6_3.png",
    ],
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Genetic Algorithms",
      "Flask",
      "Streamlit",
      "BeautifulSoup",
      "RAG Chatbots",
      "React",
    ],
    demoUrl: "/Projects/project6/final_year_project_report.pdf",
    githubUrl: "https://github.com/SKCodes1/LIONSLINEUP.git",
  },

  {
    id: 7,
    title:
      "Object Transportation using Collaborative Robots Final Year Research Project",
    description:
      "Collaborative robotic system with dual microcontrollers for coordinated object transport using real-time communication and advanced control algorithms.",
    images: [
      "/Projects/project7/project7.png",
      // "/Projects/project7/project7_2.png",
      // "/Projects/project7/project7_3.png",
    ],
    tags: ["ESP32", "ESP-NOW", "PID Control", "Embedded C++", "Robotics"],
    demoUrl: "#",
    githubUrl: null,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-9xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}
              <ImageCarousel images={project.images} />

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-1 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  {/* <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div> */}
                  <div className="flex space-x-3">
                    {/* DEMO / PDF */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {/* GITHUB */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SKCodes1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
