import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const entries = [
    {
      title: 'Analog LIF Neuron (PD-SOI)',
      description:
        'Single-transistor Leaky Integrate-and-Fire neuron implemented in Partially Depleted SOI (PD-SOI), including device-level modeling and circuit validation.',
      technologies: ['PD-SOI', 'Sentaurus TCAD', 'Analog Circuits', 'Neuromorphic'],
      highlights: [
        'Implemented single-transistor LIF using impact ionization to emulate biological spiking dynamics',
        'Modeled PD-SOI MOSFET in Sentaurus TCAD with Id–Vg and Id–Vd sweeps across multiple doping profiles',
        'Validated Fire–Reset action at V=0.4 V and V=1.0 V with drain/source doping = 1e20 and channel doping = 1e15',
        'Device-level engineering targeted for low-power neuromorphic compute blocks'
      ],
      year: '2024',
      links: { paper: undefined as string | undefined, repo: undefined as string | undefined }
    },

    {
      title: 'Project Visio',
      description:
        'Multifaceted research under Prof. Sougata Sen: explainable VQA, a retrieval-augmented LLM pipeline, and hardware prototypes for wearable assistants.',
      technologies: ['PyTorch', 'Python', 'ESP32', 'IoT', 'LLM Pipelines'],
      highlights: [
        'Published: "Project Visio" (UbiComp workshop) — electronics, IoT, PCB design contributions',
        'Explainable VQA: MemMod4CVQA — episodic, semantic and causal memory integration for egocentric VQA',
        'Built a retrieval-augmented LLM pipeline with memory-based context handling and caching',
        'AI-powered smart glasses prototype using ESP32 for sensing, realtime processing and user interaction'
      ],
      year: '2023',
      links: { paper: undefined as string | undefined, repo: undefined as string | undefined }
    },

    {
      title: 'Review of Photodetectors',
      description:
        'Comprehensive survey comparing cooled photon detectors, thermal detectors, and next-generation uncooled photon detectors with material- and system-level analysis.',
      technologies: ['HgCdTe', 'InSb', 'InGaAs', 'QWIP', 'Type-II SLS', 'MEMS'],
      highlights: [
        'Analyzed material systems (HgCdTe, InSb, InGaAs, GaAs/AlGaAs QWIPs, Type-II SLS) and their cooling, dark current and scalability limits',
        'Surveyed modern pathways to near–room-temperature IR detection: optical resonators, barrier detectors (bBn/pBp), cascade detectors, 2D/quantum-dot materials',
        'Focused thermal detector (microbolometer/MEMS) trade-offs: TCR, thermal noise, pixel isolation, and CMOS–MEMS integration',
        'Positioned uncooled photon detectors as a route to photon-level sensitivity with microbolometer practicality'
      ],
      year: '2024',
      links: { paper: undefined as string | undefined, repo: undefined as string | undefined }
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
            <p className="text-muted-foreground text-sm mb-8 tracking-wide uppercase">Research</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
              Research Highlights
            </h1>
          </motion.div>

          <div className="space-y-12">
            {entries.map((e, i) => (
              <motion.article
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="pb-12 border-b border-border last:border-0"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h2 className="text-2xl md:text-3xl font-light">{e.title}</h2>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{e.year}</span>
                </div>

                <p className="text-muted-foreground font-light mb-4 leading-relaxed">{e.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {e.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(e as any).highlights && (
                  <ul className="list-disc ml-6 mb-4 text-muted-foreground space-y-1">
                    {(e as any).highlights.map((h: string) => (
                      <li key={h} className="text-sm leading-snug">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {(e.links.paper || e.links.repo) && (
                  <div className="flex gap-4">
                    {e.links.paper && (
                      <a href={e.links.paper} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent">
                          <FileText className="w-4 h-4 mr-2" />
                          View Paper
                        </Button>
                      </a>
                    )}
                    {e.links.repo && (
                      <a href={e.links.repo} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Repository
                        </Button>
                      </a>
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

export default Research;
