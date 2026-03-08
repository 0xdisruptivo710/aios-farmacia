import { motion } from "framer-motion";

const painPoints = [
  "Poucos pedidos por dia e faturamento imprevisível",
  "Movimentação irregular — dias bons e dias péssimos",
  "Clientes que compram uma vez e nunca mais retornam",
  "Falta de previsibilidade para planejar crescimento",
  "Promoções constantes que corroem sua margem",
];

const PainSection = () => (
  <section className="py-24 lg:py-32 bg-section-warm relative overflow-hidden">
    {/* Decorative circle */}
    <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-sand-100/60 blur-[80px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
          O problema
        </span>
        <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-6 leading-[1.15]">
          Se sua farmácia depende apenas de indicação médica,{" "}
          <span className="text-destructive italic">
            você está deixando dinheiro na mesa
          </span>
        </h2>
        <p className="font-body text-muted-foreground text-lg font-light">
          Reconhece algum desses sinais?
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-6 py-5 border-b border-border/60 last:border-b-0 group"
          >
            <span className="font-display text-2xl text-sand-400 font-medium shrink-0 w-8 text-right tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="h-px w-6 bg-destructive/30 shrink-0" />
            <p className="font-body text-foreground/80 text-[15px] leading-relaxed group-hover:text-foreground transition-colors duration-300">
              {point}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
