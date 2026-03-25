import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
  >
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
          <span className="font-display text-[10px] font-bold text-primary-foreground tracking-wide">
            AIOS
          </span>
        </div>
        <span className="font-display text-xl font-semibold text-foreground tracking-tight">
          AIOS
        </span>
      </div>

      <a
        href="https://wa.me/351961342444?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20AIOS%20sobre%20o%20sistema%20para%20minha%20farm%C3%A1cia."
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-[13px] font-medium px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-sage-800 transition-colors duration-300"
      >
        Falar com Especialista
      </a>
    </div>
  </motion.header>
);

export default Header;
