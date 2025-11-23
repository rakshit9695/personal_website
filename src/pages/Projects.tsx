import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');

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
      links: { github: 'https://github.com/rakshit9695/gemm-llm-fpga-accelerator', demo: undefined as string | undefined }
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
      links: { github: 'https://github.com/rakshit9695/riscv-verilog-implementation', demo: undefined as string | undefined }
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
      links: { github: 'https://github.com/rakshit9695/fifo-architectures', demo: undefined as string | undefined }
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
      links: { github: 'https://github.com/rakshit9695/digital-frequency-meter', demo: undefined as string | undefined }
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
              Work & Projects
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
