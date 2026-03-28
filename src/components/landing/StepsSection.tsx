import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  {
    num: "01",
    title: "Diagnóstico Estratégico",
    desc: "Analisamos sua farmácia, região, concorrência e potencial de crescimento.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Estruturação das Campanhas",
    desc: "Criamos campanhas de tráfego pago segmentadas para sua cidade e público.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Implantação do CRM",
    desc: "Organizamos sua base de clientes e configuramos automações de follow-up.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7h8M8 11h5M8 15h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ativação da Base",
    desc: "Reativamos clientes antigos com campanhas inteligentes de recompra.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Otimização Contínua",
    desc: "Acompanhamento semanal para maximizar resultados e escalar o crescimento.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const StepsSection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute top-[40%] left-[-5%] w-[300px] h-[300px] rounded-full bg-bronze-50/40 blur-[80px]" />

    <div className="container relative z-10">
      <BlurFade>
        <div className="text-center mb-20">
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-primary mb-5">
            Processo
          </span>
          <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-6">
            Como funciona{" "}
            <span className="text-primary italic">na prática</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Um processo claro e estruturado do diagnóstico ao crescimento contínuo.
          </p>
        </div>
      </BlurFade>

      <div className="max-w-3xl mx-auto relative">
        {/* Connecting vertical line */}
        <div className="absolute left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent hidden sm:block" />

        <div className="space-y-2">
          {steps.map((step, i) => (
            <BlurFade key={i} delay={0.1 + i * 0.1}>
              <div className="flex items-start gap-6 p-5 rounded-2xl hover:bg-sage-50/50 transition-all duration-400 group">
                {/* Step number circle */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-[62px] h-[62px] rounded-2xl border-2 border-border bg-background flex flex-col items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-400 shadow-sm"
                  >
                    <span className="font-display text-lg font-bold text-primary/70 leading-none">
                      {step.num}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pt-2 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sage-50 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed ml-11">
                    {step.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Process image */}
      <BlurFade delay={0.6}>
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lifted relative">
          <img
            src="https://images.unsplash.com/photo-1724860755552-55f1c46f763d?auto=format&fit=crop&w=1200&q=80"
            alt="Profissional manipulando fórmulas em laboratório"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 via-sage-900/40 to-transparent flex items-center">
            <div className="px-10">
              <p className="font-display text-2xl text-white font-semibold mb-2">
                Do diagnóstico ao resultado
              </p>
              <p className="font-body text-white/70 text-sm max-w-sm">
                Em 30 dias, seu sistema de pedidos previsíveis estará funcionando e gerando resultados.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  </section>
);

export default StepsSection;
