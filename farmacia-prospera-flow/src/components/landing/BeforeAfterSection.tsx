import { motion } from "framer-motion";
import { Minus, Check } from "lucide-react";

const before = [
  "Esperando o cliente entrar pela porta",
  "Dependência total de indicação médica",
  "Base de clientes parada e esquecida",
  "Competição apenas por preço",
];

const after = [
  "Novos pedidos chegando todos os dias",
  "Recompra automatizada e recorrente",
  "Previsibilidade real de crescimento",
  "Clientes recorrentes e fidelizados",
];

const BeforeAfterSection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute top-[30%] right-[-5%] w-[300px] h-[300px] rounded-full bg-sage-50/60 blur-[80px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
          Transformação
        </span>
        <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground">
          A mudança é{" "}
          <span className="text-primary italic">visível</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-lg bg-card border border-border shadow-soft"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/8 border border-destructive/15 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive/60" />
            <span className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-destructive/80">
              Antes
            </span>
          </div>
          <ul className="space-y-5">
            {before.map((item, i) => (
              <li key={i} className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full border border-sand-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Minus className="w-3 h-3 text-sand-400" />
                </div>
                <span className="font-body text-muted-foreground text-[15px] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-lg bg-card border border-primary/15 shadow-soft relative overflow-hidden"
        >
          {/* Subtle green tint at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-300/40 via-sage-400/50 to-sage-300/40" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-primary/80">
              Depois
            </span>
          </div>
          <ul className="space-y-5">
            {after.map((item, i) => (
              <li key={i} className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="font-body text-foreground text-[15px] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
