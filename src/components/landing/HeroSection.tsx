import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { sendWebhook } from "@/lib/webhook";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Full-screen background image */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1920&q=80"
        alt="Farmácia moderna com prateleiras organizadas"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sage-900/85 via-sage-900/75 to-sage-900/90" />
    </div>

    {/* Particles effect */}
    <Particles
      className="absolute inset-0 z-10"
      quantity={50}
      color="255, 255, 255"
      size={1.2}
      speed={0.2}
      opacity={0.4}
    />

    {/* Floating pharmacy icons */}
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[20%] right-[15%] z-10 hidden lg:block"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="10" width="18" height="11" rx="2" stroke="white" strokeWidth="1.5" />
          <path d="M12 13v5M9.5 15.5h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 10V6a4 4 0 118 0v4" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
    </motion.div>
    <motion.div
      animate={{ y: [6, -6, 6] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[25%] left-[10%] z-10 hidden lg:block"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 2h6l1 3H8L9 2z" fill="white" opacity="0.5" />
          <path d="M5 7h14a1 1 0 011 1v1a8 8 0 01-5.5 7.6L15 21H9l.5-4.4A8 8 0 014 9V8a1 1 0 011-1z" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
    </motion.div>

    <div className="container relative z-20 pt-32 pb-24 lg:pt-44 lg:pb-36">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
          <span className="font-body text-[11px] tracking-[0.18em] uppercase text-white/80 font-medium">
            Exclusivo para Farmácias de Manipulação
          </span>
        </motion.div>

        {/* Animated headline */}
        <TextGenerateEffect
          words="Transforme sua farmácia em uma máquina de pedidos recorrentes"
          className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-[1.08] text-white mb-8"
          duration={0.6}
          staggerDelay={0.06}
        />

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-bronze-400/60" />
          <div className="w-2 h-2 rounded-full bg-bronze-400/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-bronze-400/60" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="font-body text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Tráfego pago estratégico + CRM inteligente para gerar novos pedidos
          diariamente e reativar clientes antigos — tudo no automático.
        </motion.p>

        {/* CTA with ShimmerButton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <a
            href="https://wa.me/351961342444?text=Ol%C3%A1%21%20Quero%20mais%20pedidos%20na%20minha%20farm%C3%A1cia%20de%20manipula%C3%A7%C3%A3o.%20Podem%20me%20explicar%20como%20funciona%20o%20sistema%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendWebhook("whatsapp_click", "hero", { action: "quero_mais_pedidos" })}
          >
            <ShimmerButton
              className="mx-auto text-white"
              background="hsl(156 25% 23%)"
              shimmerColor="rgba(184, 149, 106, 0.4)"
            >
              Quero Mais Pedidos na Minha Farmácia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </ShimmerButton>
          </a>
        </motion.div>

        {/* Trust indicators with animated counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-white/15"
        >
          {[
            { icon: TrendingUp, target: 300, prefix: "+", suffix: "%", text: "em pedidos mensais" },
            { icon: Users, target: 50, prefix: "+", suffix: "", text: "farmácias atendidas" },
            { icon: Award, target: 100, prefix: "", suffix: "%", text: "exclusividade regional" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 px-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <item.icon className="w-4.5 h-4.5 text-bronze-300" />
              </div>
              <div className="text-left">
                <AnimatedCounter
                  target={item.target}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  className="font-display text-2xl font-semibold text-white block"
                />
                <span className="font-body text-xs text-white/50">{item.text}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
  </section>
);

export default HeroSection;
