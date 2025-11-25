import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const technicalProjects = [
    {
      title: 'LLM Inference FPGA Accelerator',
      description: 'High-throughput FPGA inference engine focused on GEMM for LLM workloads — 16-bit integer ops with 32-bit accumulation and cycle-level benchmarking.',
      technologies: ['Verilog', 'C++', 'AXI-Lite', 'Verilator'],
      highlights: [
        'Modular RTL (GEMM engine, AXI‑Lite interface, memory controller)',
        'C++ testbench for matrix generation, waveform visualization, and performance logging',
        'CSV output with GOPS metrics and cycle-accurate trace analysis',
        'Pipeline-friendly PE architecture to maximize MAC utilization',
        'Planned expansions: floating-point support, DMA, multi-core execution'
      ],
      year: '2024',
      links: { github: 'https://github.com/rakshit9695/Hardware-Accelerator', demo: undefined as string | undefined }
    },
    {
      title: 'Cadence PLL Implementation',
      description: 'Analog mixed-signal PLL implemented at transistor level (PFD, charge pump, VCO, loop filter, divider) and validated in Cadence Virtuoso.',
      technologies: ['Cadence Virtuoso', 'SPICE', 'Layout & Schematic Capture'],
      highlights: [
        'Transistor-level design of PFD, charge pump, VCO, loop filter, and divider',
        'CMOS layout and schematic capture with LVS/DRC-aware flow',
        'Characterized locking behavior, jitter, and frequency control in simulation',
        'Practical readiness for high-speed SerDes and clocking integration'
      ],
      year: '2023',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
    },
    {
      title: 'MIPS RISC-V Processor',
      description: '32-bit RISC-V compatible CPU with a four-stage pipeline (IF, ID, EX, WB), hazard detection, and forwarding — validated with self-checking testbenches.',
      technologies: ['Verilog', 'Custom Testbenches'],
      highlights: [
        'Four-stage pipeline with forwarding and hazard control',
        'Register file, ALU, control unit, and pipeline register modules',
        'Self-checking testbenches executing real RISC-V assembly',
        'Waveform-driven validation and functional test coverage'
      ],
      year: '2023',
      links: { github: 'https://github.com/rakshit9695/RISCV_Processor', demo: undefined as string | undefined }
    },
    {
      title: 'Synchronous & Asynchronous FIFO Architectures',
      description: 'Dual FIFO designs addressing clock-domain crossing, metastability, and verification through formal assertions and randomized testbenches.',
      technologies: ['Verilog', 'SystemVerilog', 'Formal Assertions'],
      highlights: [
        'Parameterized FIFO depth with configurable datapath width',
        'Asynchronous CDC using Gray-code pointers and double-flop synchronizers',
        'Overflow/underflow detection and robust status signaling',
        'Formal verification with assertions and randomized stimulus'
      ],
      year: '2022',
      links: { github: 'https://github.com/rakshit9695/FIFO', demo: undefined as string | undefined }
    },
    {
      title: 'Digital Frequency Meter',
      description: 'Compact instrumentation device using a 100 Hz time base to measure 0.00–99.99 Hz, implemented with digital logic and KiCad schematics/PCB.',
      technologies: ['Digital Logic', 'KiCad'],
      highlights: [
        '100 Hz time-base derived from a crystal for stable gating',
        'Counters and logic to display 0.00–99.99 Hz on dual 7-segment displays',
        'KiCad schematic and PCB files for easy fabrication',
        'Designed for educational and laboratory measurement use'
      ],
      year: '2021',
      links: { github: 'https://github.com/rakshit9695/Frequency-Meter', demo: undefined as string | undefined }
    }
  ];

  const projects = technicalProjects;

  const nonTechnicalProjects = [
    {
      title: 'Qwipo — International SaaS Strategy & Market Expansion',
      description: 'Led an international market penetration and pricing study for Qwipo, focusing on MEA and SEA expansion for a B2B SaaS product.',
      technologies: ['Consulting', 'SaaS Strategy', 'Market Research'],
      highlights: [
        'Directed full-stack market penetration study across Middle East and Southeast Asia',
        'Performed competitor intelligence, segmentation, and GTM strategy analysis',
        'Designed SaaS roadmap, pricing models, and product feature prioritization',
        'Built pricing and risk-mitigation frameworks to optimize burn and sustainability',
        'Engaged with client leadership to ensure aligned delivery and stakeholder communication'
      ],
      year: '2024',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
    },
    {
      title: 'Misobo — India-wide Fitness & Wellness Market Study',
      description: 'Conducted comprehensive market research and GTM planning for Misobo’s India expansion in the health and wellness segment.',
      technologies: ['Market Research', 'GTM Strategy', 'User Research'],
      highlights: [
        'Delivered industry-wide market sizing and segmentation for the Indian fitness market',
        'Developed user personas across mental, physical, and spiritual wellness domains',
        'Produced competitor benchmarking and launch strategy for India entry'
      ],
      year: '2023',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
    },
    {
      title: 'CRY — Fundraising Strategy & Volunteer Support',
      description: 'Advised CRY on fundraising models and delivered tools for the Volunteer Action team to scale outreach and scholarship tracking.',
      technologies: ['Social Impact', 'Data Organization', 'Strategy'],
      highlights: [
        'Designed new fundraising models and national engagement strategies',
        'Built an interactive Excel dashboard consolidating scholarships and grants',
        'Supported Volunteer Action Team with citizen-centric resource-generation frameworks'
      ],
      year: '2023',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
    },
    {
      title: 'Government of Goa — Sectoral Policy & Market Research',
      description: 'Contributed to a policy recommendation report by analyzing sectoral opportunities and skill gaps for Goa’s technology and electronics sectors.',
      technologies: ['Policy', 'Market Research', 'Sector Analysis'],
      highlights: [
        'Researched CSIT and electronics industry skill gaps and ecosystem barriers',
        'Prepared sector-specific insights feeding into state-level development planning',
        'Provided structured recommendations for workforce and industry development'
      ],
      year: '2023',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
    },
    {
      title: 'Gelo — Product & Market Strategy',
      description: 'Delivered end-to-end product and GTM strategy for Gelo, including pricing, TAM–SAM–SOM modelling, and UX audit.',
      technologies: ['Product Strategy', 'TAM/SAM/SOM', 'UX Audit'],
      highlights: [
        'Built pricing strategy and go-to-market plan',
        'Performed TAM–SAM–SOM modelling and competitor landscape analysis',
        'Conducted UI/UX audit to identify user journey friction and recommend improvements'
      ],
      year: '2024',
      links: { github: undefined as string | undefined, demo: undefined as string | undefined }
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
              Work & Projects
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
              Projects
            </h1>
          </motion.div>

          {/* Technical projects list */}

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

                {(project as any).highlights && (
                  <ul className="list-disc ml-6 mb-4 text-muted-foreground space-y-1">
                    {(project as any).highlights.map((h: string) => (
                      <li key={h} className="text-sm leading-snug">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {(project.links.github || project.links.demo) && (
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
          
          {/* Non-Technical projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <p className="text-muted-foreground text-sm mb-8 tracking-wide uppercase">Non-Technical</p>
            <div className="space-y-12">
              {nonTechnicalProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="pb-12 border-b border-border last:border-0"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-light">{project.title}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{project.year}</span>
                  </div>

                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 text-sm border border-border text-muted-foreground">{tech}</span>
                    ))}
                  </div>

                  {(project as any).highlights && (
                    <ul className="list-disc ml-6 mb-4 text-muted-foreground space-y-1">
                      {(project as any).highlights.map((h: string) => (
                        <li key={h} className="text-sm leading-snug">{h}</li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
