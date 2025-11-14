import { motion } from 'framer-motion';
import { NavLink } from '@/components/NavLink';

const Navigation = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/who-am-i', label: 'Who Am I?' },
    { to: '/projects', label: 'Projects' },
    { to: '/work-experience', label: 'Work' },
    { to: '/research', label: 'Research' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
          >
            RAKSHIT
          </NavLink>

          <div className="flex gap-8">
            {links.slice(1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
