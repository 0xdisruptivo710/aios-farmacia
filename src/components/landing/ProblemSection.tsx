import { motion } from "framer-motion";
import { X } from "lucide-react";

const problems = [
  "Estratégia de aquisição local estruturada",
  "CRM organizado para acompanhar cada cliente",
  "Estratégia de recompra para fórmulas recorrentes",
  "Remarketing ativo para reativar clientes inativos",
];

const ProblemSection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-sage-50/70 blur-[90px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-primary mb-5">
          Diagnóstico
        </span>
        <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-6 leading-[1.15]">
          O problema{" "}
          <span className="text-primary italic">não é falta de clientes.</span>
          <br />
          É falta de sistema.
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto font-light">
          A maioria das farmácias de manipulação não possui os elementos
          fundamentais para crescer com consistência:
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto grid gap-4 sm:grid-cols-2">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border hover:border-destructive/20 transition-colors duration-400 shadow-soft"
          >
            <div className="w-7 h-7 rounded-full border border-destructive/25 flex items-center justify-center shrink-0 mt-0.5">
              <X className="w-3.5 h-3.5 text-destructive/70" />
            </div>
            <span className="font-body text-foreground/85 text-[15px] leading-relaxed">
              {problem}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-14 font-body text-muted-foreground max-w-lg mx-auto text-[15px] leading-relaxed"
      >
        Sem essas peças, você continua refém da indicação médica e do acaso.{" "}
        <span className="text-foreground font-medium">É hora de mudar essa realidade.</span>
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
