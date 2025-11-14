import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');

  const technicalProjects = [
    {
      title: 'Distributed Task Queue System',
      description: 'A high-performance, scalable task queue built with Go and Redis for handling millions of async jobs',
      technologies: ['Go', 'Redis', 'Docker', 'Kubernetes'],
      year: '2024',
      links: { github: '#' as string | undefined, demo: '#' as string | undefined }
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive data visualization platform processing streaming data with sub-second latency',
      technologies: ['React', 'TypeScript', 'WebSockets', 'D3.js'],
      year: '2024',
      links: { github: '#' as string | undefined, demo: '#' as string | undefined }
    },
    {
      title: 'ML Model Serving API',
      description: 'RESTful API for serving machine learning models with automatic scaling and monitoring',
      technologies: ['Python', 'FastAPI', 'PyTorch', 'AWS'],
      year: '2023',
      links: { github: '#' as string | undefined, demo: undefined as string | undefined }
    },
    {
      title: 'Microservices Architecture',
      description: 'Complete microservices ecosystem with service discovery, API gateway, and distributed tracing',
      technologies: ['Node.js', 'Kafka', 'MongoDB', 'Consul'],
      year: '2023',
      links: { github: '#' as string | undefined, demo: undefined as string | undefined }
    }
  ];

  const nonTechnicalProjects = [
    {
      title: 'Tech Community Mentorship',
      description: 'Mentoring program connecting experienced developers with beginners, helped 50+ mentees',
      technologies: ['Leadership', 'Communication', 'Teaching'],
      year: '2024',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
    },
    {
      title: 'Open Source Documentation',
      description: 'Comprehensive documentation project improving accessibility for a major OSS framework',
      technologies: ['Technical Writing', 'Information Architecture'],
      year: '2024',
      links: { github: undefined as string | undefined, demo: '#' as string | undefined }
    },
    {
      title: 'Developer Workshop Series',
      description: 'Monthly workshops on modern development practices, reaching 200+ developers',
      technologies: ['Public Speaking', 'Curriculum Design'],
      year: '2023',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
    }
  ];

  const projects = activeTab === 'technical' ? technicalProjects : nonTechnicalProjects;

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
              Portfolio
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
              Projects
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8 mb-16 border-b border-border"
          >
            <button
              onClick={() => setActiveTab('technical')}
              className={`pb-4 text-lg font-light transition-colors relative ${
                activeTab === 'technical' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Technical
              {activeTab === 'technical' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('non-technical')}
              className={`pb-4 text-lg font-light transition-colors relative ${
                activeTab === 'non-technical' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Non-Technical
              {activeTab === 'non-technical' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                />
              )}
            </button>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="pb-12 border-b border-border last:border-0"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h2 className="text-2xl md:text-3xl font-light">{project.title}</h2>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.links.github || project.links.demo) && (
                  <div className="flex gap-4">
                    {project.links.github && (
                      <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
