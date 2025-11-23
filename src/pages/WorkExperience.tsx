import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      role: 'Energy Systems Analyst',
      company: 'Lighthouse Energy Ltd. — Canada (Remote)',
      period: 'July 2025 – Present',
      description:
        'Design, develop, and deploy cloud-scale digital twin software to model hybrid power + compute systems for high-density computational facilities. Work spans digital twin engineering, ML-driven optimization, and system-level energy modeling.',
      achievements: [
        'Built a commercial-grade digital twin framework modeling renewables, batteries, generators, and compute workloads',
        'Simulated power flow, thermal loading, and operational constraints in real time to enable scenario-based planning',
        'Developed ML/DL pipelines for predictive performance modeling, workload-aware orchestration, and energy cost optimization',
        'Delivered decision-support dashboards for facility sizing, efficiency benchmarking, and simulation-driven validation'
      ]
    },
    {
      role: 'Summer Intern — Energy Systems Engineering',
      company: 'Lighthouse Energy Ltd.',
      period: 'April 2025 – June 2025',
      description:
        'Designed and simulated hybrid renewable-energy architectures for HPC/ASIC data centers, combining power engineering, Python-based simulation, and operational optimization.',
      achievements: [
        'Modeled solar, wind, battery, and grid-linked systems for ASIC-HPC facilities and analyzed reliability and LCOE impacts',
        'Implemented real-time optimization algorithms for intelligent power allocation under dynamic pricing and workload surges',
        'Built a Streamlit dashboard for power flow visualization, battery SOC tracking, and runtime scenario analysis'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: '2023 - 2024',
      description: 'Leading development of cloud-native applications and microservices architecture. Mentoring junior developers and driving technical excellence across teams.',
      achievements: [
        'Architected and deployed scalable system handling 10M+ requests daily',
        'Reduced infrastructure costs by 40% through optimization',
        'Led team of 5 engineers in delivering critical features on time'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Corp',
      period: '2021 - 2023',
      description: 'Built responsive web applications using React and Node.js. Collaborated with design and product teams to deliver user-centric solutions.',
      achievements: [
        'Developed real-time collaboration features used by 50K+ users',
        'Improved application performance by 60% through code optimization',
        'Implemented comprehensive testing suite increasing code coverage to 85%'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-sm mb-8 tracking-wide uppercase">
              Career
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
              Work Experience
            </h1>
          </motion.div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 pb-16 border-b border-border last:border-0"
              >
                <div className="absolute left-0 top-2">
                  <div className="w-8 h-8 border border-border flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h2 className="text-2xl md:text-3xl font-light">{exp.role}</h2>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground font-light">{exp.company}</p>
                </div>

                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm text-foreground mb-3">Key Achievements:</p>
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-muted-foreground mt-1">—</span>
                      <p className="text-muted-foreground font-light">{achievement}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h2 className="text-2xl font-light mb-8">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm text-foreground mb-4 tracking-wide uppercase">Frontend</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  React, TypeScript, Next.js, Tailwind CSS, Vue.js
                </p>
              </div>
              <div>
                <h3 className="text-sm text-foreground mb-4 tracking-wide uppercase">Backend</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Node.js, Python, Go, PostgreSQL, MongoDB, Redis
                </p>
              </div>
              <div>
                <h3 className="text-sm text-foreground mb-4 tracking-wide uppercase">DevOps</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Docker, Kubernetes, AWS, CI/CD, Terraform
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default WorkExperience;
