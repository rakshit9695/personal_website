import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';
const WhoAmI = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  };
  const skills = [{
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Digital Twin Modelling',
    description:
      "Expert in designing and implementing digital twins for electromechanical systems, with specialization in energy, industrial, and semiconductor system‑level modeling.",
  }, {
    icon: <Code className="w-6 h-6" />,
    title: 'RTL Design & Verification',
    description: 'Expert in Verilog/SystemVerilog and UVM methodologies for robust digital design and verification workflows'
  }, {
    icon: <Palette className="w-6 h-6" />,
    title: 'Analog & Mixed-Signal Design',
    description: 'Proficient in CMOS circuit design using Cadence Virtuoso for high-performance analog and mixed-signal systems'
  }, {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'RISC-V & Digital Architecture',
    description: 'Deep understanding of RISC-V ISA, processor microarchitecture, and custom digital SoC design principles'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Semiconductor Device Physics',
    description: 'Advanced knowledge in device modeling, TCAD simulation, and Spectre for circuit-level performance analysis'
  }, {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Optimization & Predictive Analysis',
    description: 'Implementing deep learning algorithms for predictive maintenance, forecasting, and intelligent decision systems'
  }, {
    icon: <Code className="w-6 h-6" />,
    title: 'FPGA Prototyping',
    description: 'Hands-on experience with Xilinx Vivado and Zynq-7000 platforms for rapid hardware prototyping and validation'
  }];
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <p className="text-muted-foreground text-sm mb-8 tracking-wide uppercase">
              About Me
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
              Who Am I?
            </h1>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed mb-20">
            <p>
              I'm an Electronics & Instrumentation Engineering student at BITS Pilani, specializing in the intersection of hardware design, energy systems, and machine learning. My work spans from low-level RTL design and FPGA prototyping to high-level optimization algorithms for hybrid power systems.
            </p>
            <p>
              Currently, I serve as an Energy Systems Analyst at Lighthouse Energy Ltd., where I architect commercial-grade digital twins for hybrid power and compute infrastructure. I leverage deep learning and optimization techniques to build predictive models and analytical dashboards that drive intelligent energy management and decision-making at scale.
            </p>
            <p>
              My technical foundation in semiconductor physics, RISC-V architecture, and analog/mixed-signal design gives me a unique perspective—bridging the gap between silicon-level implementation and system-level intelligence. I'm driven by the challenge of building solutions that are both technically rigorous and practically transformative.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <h2 className="text-2xl font-light mb-12 text-foreground">Expertise  </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.5 + index * 0.1
            }} className="p-6 border border-border hover:border-foreground transition-colors group">
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-light mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground font-light">{skill.description}</p>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.9
        }} className="mt-20 pt-12 border-t border-border">
            <h2 className="text-2xl font-light mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light mb-2">Birla Institute of Technology and Science, Pilani</h3>
                <p className="text-muted-foreground font-light">Bachelor of Engineering (Hons.) in Electronics & Instrumentation</p>
                <p className="text-muted-foreground font-light text-sm mt-1">October 2022 – May 2026 | CGPA: 7.7/10</p>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mt-6">
                My coursework combines core electronics with instrumentation and control systems, covering digital signal processing, embedded systems, communication systems, electrical machines, power systems, and advanced programming—providing a strong foundation for both hardware and software engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>;
};
export default WhoAmI;