import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { sendWebhook } from "@/lib/webhook";

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40"
  >
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
            <path d="M9 2h6l1 3H8L9 2z" fill="currentColor" opacity="0.6" />
            <path d="M5 7h14a1 1 0 011 1v1a8 8 0 01-5.5 7.6L15 21H9l.5-4.4A8 8 0 014 9V8a1 1 0 011-1z" fill="currentColor" />
            <circle cx="10" cy="12" r="1.5" fill="hsl(156 25% 23%)" opacity="0.3" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-xl font-semibold text-foreground tracking-tight leading-none">
            AIOS
          </span>
          <span className="font-body text-[9px] text-muted-foreground tracking-[0.15em] uppercase">
            Farmácia Digital
          </span>
        </div>
      </div>

      <a
        href="https://wa.me/351961342444?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20AIOS%20sobre%20o%20sistema%20para%20minha%20farm%C3%A1cia."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendWebhook("whatsapp_click", "header", { action: "falar_com_especialista" })}
        className="group flex items-center gap-2 font-body text-[13px] font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-sage-800 transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <Phone className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Falar com Especialista</span>
        <span className="sm:hidden">Contato</span>
      </a>
    </div>
  </motion.header>
);

export default Header;
