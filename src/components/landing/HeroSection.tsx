import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft organic shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-sage-100/60 blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full bg-bronze-100/50 blur-[100px]" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-sage-50/80 blur-[80px]" />

      {/* Thin decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-transparent via-sand-400/60 to-transparent origin-top"
      />

      <div className="container relative z-10 pt-36 pb-28 lg:pt-48 lg:pb-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-5 py-2 mb-12 shadow-soft"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-medium">
              Exclusivo para Farmácias de Manipulação
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-semibold leading-[1.05] text-foreground mb-8"
          >
            Transforme sua farmácia em uma máquina de{" "}
            <span className="italic text-primary">pedidos recorrentes</span>
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-accent/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            <div className="h-px w-12 bg-accent/40" />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed font-light"
          >
            Tráfego pago estratégico + CRM inteligente para gerar novos pedidos
            diariamente e reativar clientes antigos — tudo no automático.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button
              onClick={scrollToCTA}
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-body font-medium px-10 py-4 rounded-full text-[15px] tracking-wide shadow-soft hover:shadow-lifted hover:bg-sage-800 transition-all duration-500"
            >
              Quero Mais Pedidos na Minha Farmácia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-28 flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border"
          >
            {[
              { icon: TrendingUp, value: "+300%", text: "em pedidos mensais" },
              { icon: Users, value: "+50", text: "farmácias atendidas" },
              { icon: Award, value: "100%", text: "exclusividade regional" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-8 py-4 sm:py-0"
              >
                <item.icon className="w-4 h-4 text-accent" />
                <span className="font-display text-2xl font-semibold text-foreground">
                  {item.value}
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
