import { motion } from "framer-motion";
import { Minus, Check } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

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
      <BlurFade>
        <div className="text-center mb-16">
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
            Transformação
          </span>
          <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground">
            A mudança é{" "}
            <span className="text-primary italic">visível</span>
          </h2>
        </div>
      </BlurFade>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Before */}
        <BlurFade delay={0.1}>
          <div className="h-full rounded-2xl overflow-hidden border border-border shadow-soft">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=700&q=80"
                alt="Farmácia vazia esperando clientes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/90 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                <span className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white">
                  Antes
                </span>
              </div>
            </div>
            <div className="p-7 bg-card">
              <ul className="space-y-4">
                {before.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full border border-sand-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Minus className="w-3 h-3 text-sand-400" />
                    </div>
                    <span className="font-body text-muted-foreground text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>

        {/* After */}
        <BlurFade delay={0.2}>
          <div className="h-full rounded-2xl overflow-hidden border border-primary/20 shadow-soft relative">
            <div className="relative h-48">
              <img
                src="https://plus.unsplash.com/premium_photo-1682130081380-ebddcd24f917?auto=format&fit=crop&w=700&q=80"
                alt="Farmacêutica atendendo cliente com excelência"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                <span className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-white">
                  Depois
                </span>
              </div>
            </div>
            <div className="p-7 bg-card relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-300/40 via-sage-400/60 to-sage-300/40" />
              <ul className="space-y-4">
                {after.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="font-body text-foreground text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
