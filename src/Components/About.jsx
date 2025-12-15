import { CircuitBoard, CloudCog, BrainCircuit } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3> */}

            <p className="text-muted-foreground">
              Aspiring IoT Data Engineer with experience designing end-to-end
              IoT ecosystems that connect embedded devices, cloud
              infrastructure, and real-time data pipelines. Skilled in building
              production-ready solutions using secure MQTT communication,
              serverless cloud platforms (AWS, GCP), and workflow orchestration
              with Apache Airflow.
            </p>

            <p className="text-muted-foreground">
              Strong background in transforming IoT data into actionable
              insights through ETL/ELT processes, data warehousing, and
              real-time analytics. Focused on creating scalable, secure, and
              intelligent connected systems that blend hardware, data
              engineering, and machine learning.
            </p>

            {/* <p className="text-muted-foreground">
              I am passionate about using data engineering, automation, and
              cloud technologies to solve real-world problems and drive
              intelligent decision-making.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Shamika_Konara_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CircuitBoard className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    IoT & Data Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Building end-to-end IoT ecosystems, integrating edge
                    devices, secure MQTT communication, and real-time data
                    pipelines with Airflow, Kafka, DBT, and Spark.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CloudCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud Architecture & DevOps Automation
                  </h4>
                  <p className="text-muted-foreground">
                    Designing scalable cloud infrastructures on AWS/GCP and
                    automating deployments using Docker, Kubernetes, Jenkins,
                    GitHub Actions, and serverless technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data Analytics, ML & Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    Transforming IoT-generated data into insights through
                    dashboards, ML workflows, and observability systems using
                    Python, Power BI, Grafana, and Prometheus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
