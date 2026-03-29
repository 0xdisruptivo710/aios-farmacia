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
      <div className="flex items-center">
        <span className="font-display text-xl font-semibold text-foreground tracking-tight">
          AIOS
        </span>
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
