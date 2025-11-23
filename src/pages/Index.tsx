import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
const Index = () => {
  const projects = [{
    title: 'Project Alpha',
    description: 'A minimalist approach to modern web design',
    year: '2024',
    link: '/projects'
  }, {
    title: 'Project Beta',
    description: 'Clean architecture meets elegant functionality',
    year: '2024',
    link: '/projects'
  }, {
    title: 'Project Gamma',
    description: 'Typography and space in perfect harmony',
    year: '2023',
    link: '/projects'
  }];
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
  return <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1
        }}>
            <motion.p className="text-muted-foreground text-sm mb-8 tracking-wide uppercase" {...fadeIn}>ENGINEERING



  </motion.p>
            
            <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.95] text-balance" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}>Building Efficient Hardware   
   
   

   

   <br />
            </motion.h1>
            
            <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              Electronics & Instrumentation Engineer specializing in Industrial, Energy and Semiconductor Engineering.
            </motion.p>

            <motion.div className="mt-12 flex gap-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              <Link to="/projects">
                <Button variant="ghost" className="group px-0 text-lg hover:bg-transparent">
                  View Work
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      

      {/* About Section */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.p className="text-muted-foreground text-sm mb-16 tracking-wide uppercase" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }}>
            About
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                Focused on creating meaningful impact through technology                                
              </h2>
              <Link to="/who-am-i">
                <Button variant="ghost" className="group px-0 text-base hover:bg-transparent mt-4">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>A passionate EIE Engineer with specializations in VLSI, RTL Design, Analog and Digital Electronics. I am also experienced in System Engineering and Industry-Grade Digital Twins.                                                                                         </p>
              <p>
                Currently working as a hybrid power systems analyst at Lighthouse Energy, I combine deep technical knowledge in VLSI, FPGA prototyping, and semiconductor physics with modern machine learning techniques to solve complex engineering challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <p className="text-muted-foreground text-sm mb-8 tracking-wide uppercase">
              Get in Touch
            </p>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Let's work together
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:f20220056@goa.bits-pilani.ac.in">
                <Button variant="ghost" className="group px-0 text-lg hover:bg-transparent">
                  <Mail className="mr-2 w-5 h-5" />
                  f20220056@goa.bits-pilani.ac.in
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              
              <a href="/resume.pdf" download="Rakshit_Mishra_Resume.pdf">
                <Button variant="ghost" className="group px-0 text-lg hover:bg-transparent">
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 All rights reserved</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/rakshitmishra9695/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/rakshit9695" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>;
};
export default Index;