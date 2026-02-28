import { motion } from "framer-motion";
import heroImage from "@/assets/hero-pharmacy.jpg";
import { Shield, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Farmácia de manipulação moderna" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 mb-8"
          >
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Exclusivo para Farmácias de Manipulação</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight text-navy-foreground mb-6"
          >
            Como Farmácias de Manipulação Estão{" "}
            <span className="text-gradient-gold">Aumentando o Volume de Pedidos</span>{" "}
            Todos os Meses Com um Sistema de Captação e Recompra Automatizado
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-navy-foreground/80 max-w-2xl mx-auto mb-10 font-light"
          >
            Implementamos tráfego pago estratégico + CRM inteligente para gerar novos pedidos diariamente e reativar clientes antigos — tudo no automático.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToCTA}
              className="bg-cta-gradient text-gold-foreground font-semibold px-8 py-4 rounded-lg text-lg shadow-cta hover:scale-105 transition-transform duration-200 animate-pulse-glow"
            >
              Quero Aumentar os Pedidos da Minha Farmácia
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              { icon: TrendingUp, text: "+300% em pedidos mensais" },
              { icon: Users, text: "+50 farmácias atendidas" },
              { icon: Shield, text: "Exclusividade por região" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center text-navy-foreground/70">
                <item.icon className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
