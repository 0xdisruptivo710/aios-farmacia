import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico Estratégico",
    desc: "Analisamos sua farmácia, região, concorrência e potencial de crescimento.",
  },
  {
    num: "02",
    title: "Estruturação das Campanhas",
    desc: "Criamos campanhas de tráfego pago segmentadas para sua cidade e público.",
  },
  {
    num: "03",
    title: "Implantação do CRM",
    desc: "Organizamos sua base de clientes e configuramos automações de follow-up.",
  },
  {
    num: "04",
    title: "Ativação da Base",
    desc: "Reativamos clientes antigos com campanhas inteligentes de recompra.",
  },
  {
    num: "05",
    title: "Otimização Contínua",
    desc: "Acompanhamento semanal para maximizar resultados e escalar o crescimento.",
  },
];

const StepsSection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute top-[40%] left-[-5%] w-[300px] h-[300px] rounded-full bg-bronze-50/40 blur-[80px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
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
      </motion.div>

      <div className="max-w-2xl mx-auto relative">
        {/* Connecting vertical line */}
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-border via-border to-transparent hidden sm:block" />

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-7 py-7 border-b border-border/50 last:border-b-0 group"
            >
              {/* Step number */}
              <div className="relative z-10 w-[54px] h-[54px] rounded-full border-2 border-border bg-background flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors duration-400">
                <span className="font-display text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-400">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StepsSection;
