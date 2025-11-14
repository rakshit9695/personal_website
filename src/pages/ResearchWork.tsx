import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { BookOpen, Award, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResearchWork = () => {
  // Content replaced with user-provided research summaries. Design and layout preserved.

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
              Academic Work
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Research Work
            </h1>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-16">
              Bridging the gap between academic research and practical software engineering.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-light mb-6">Research Work — Ramesh Vasan (Infrared Sensors)</h2>

            <h3 className="text-lg font-medium mb-3">🔹 Bird’s-Eye Overview of the Review Paper</h3>
            <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6">
              <li>Conducted a comprehensive survey of infrared photodetector technologies, comparing cooled photon detectors, thermal detectors, and next-generation uncooled photon detectors.</li>
              <li>Analyzed material systems (HgCdTe, InSb, InGaAs, GaAs/AlGaAs QWIPs, Type-II SLS) and their limitations regarding cooling, dark current, and scalability.</li>
              <li>Highlighted modern pathways enabling near–room-temperature IR detection, including optical resonators, barrier detectors (bBn/pBp), cascade detectors, and emerging 2D/quantum-dot materials.</li>
              <li>Positioned uncooled photon detectors as the future of IR imaging by combining photon-detector-level sensitivity with microbolometer-like practicality.</li>
            </ul>

            <h3 className="text-lg font-medium mb-3">🔹 My Contribution — Thermal Detector Section (point-wise summary)</h3>
            <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6">
              <li>Reviewed the full landscape of uncooled thermal infrared detectors, with emphasis on microbolometers and MEMS-based thermal sensing.</li>
              <li>Compared bolometric materials — a-Si, VOx, Ti/Pt metals, SiGe MQWs/MQDs, graphene/CNT composites — analyzing TCR, thermal noise, and fabrication engineering.</li>
              <li>Studied thermal physics: heat-flow models, thermal conductance, response time, and pixel-level thermal isolation strategies.</li>
              <li>Explored geometric and process-level optimizations such as pixel scaling, bridge-style MEMS suspensions, and cavity-backed absorption.</li>
              <li>Assessed CMOS–MEMS heterogeneous integration methods enabling high-resolution, low-power thermal FPAs.</li>
              <li>Evaluated performance trade-offs of thermal detectors vs. pyroelectric sensors, focusing on NEP, accuracy, and application limitations.</li>
              <li>Investigated emerging high-performance materials (VOx derivatives, SiGe MQDs, plasmonic-enhanced silicon bolometers) to push uncooled imaging toward lower noise and higher detectivity.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-light mb-6">Research Work — Sougata Sen</h2>

            <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6">
              <li>Published a paper: Project Visio, UbiComp Workshop Paper — Electronics, IoT, PCB Design (under guidance of Professor Sougata Sen).</li>
              <li>Research on Explainable VQA (Accepted paper: MemMod4CVQA): Designed a novel model integrating episodic, semantic, and causal memory for explainable visual question answering on egocentric data.</li>
              <li>Built a Retrieval-Augmented LLM Pipeline (software): an optimized language model pipeline with retrieval augmentation, memory-based context handling, and caching mechanisms.</li>
              <li>AI-Powered Smart Glasses (hardware project): Developing wearable smart glasses using the ESP32 microcontroller as a personal assistant integrating real-time sensing, processing, and user interaction.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-light mb-6">Analog LIF Neuron</h2>

            <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6">
              <li>Developed a single-transistor Leaky Integrate-and-Fire (LIF) neuron in Partially Depleted SOI (PD-SOI) technology, utilizing impact ionization and device-level engineering to emulate biological spiking behavior for neuromorphic computing systems.</li>
              <li>Modeled a PD-SOI MOSFET in Sentaurus TCAD, performing Id–Vg and Id–Vd sweeps across multiple doping concentrations.</li>
              <li>Validated LIF functionality with Fire–Reset action at V=0.4V and V=1V using drain/source doping = 1e20 and channel doping = 1e15.</li>
            </ul>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h2 className="text-2xl font-light mb-6">Collaborations</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Open to research collaborations and academic partnerships. Interested in
              projects that bridge theory and practice in software engineering.
            </p>
            <Button variant="ghost" className="px-0 hover:bg-transparent">
              Get in Touch
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ResearchWork;
