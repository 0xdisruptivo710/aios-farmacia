import { motion } from "framer-motion";
import { DollarSign, ArrowRight } from "lucide-react";

const ValueSection = () => (
  <section className="py-24 lg:py-32 bg-section-warm relative overflow-hidden">
    <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-bronze-50/40 blur-[90px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-14">
          <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
            Investimento
          </span>
          <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-4">
            Faça as contas:{" "}
            <span className="text-gradient-bronze italic">
              o retorno é inevitável
            </span>
          </h2>
        </div>

        <div className="rounded-lg bg-card border border-border p-8 lg:p-10 shadow-soft">
          <div className="space-y-8">
            {/* Value proposition 1 */}
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-lg bg-bronze-50 border border-bronze-100 flex items-center justify-center shrink-0">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Um cliente recorrente vale milhares por ano
                </h3>
                <p className="font-body text-muted-foreground text-[15px] leading-relaxed">
                  Um único cliente de manipulação pode gastar de R$ 200 a R$ 800
                  por mês em fórmulas. Em 12 meses, isso significa de{" "}
                  <strong className="text-foreground font-medium">
                    R$ 2.400 a R$ 9.600
                  </strong>{" "}
                  por cliente.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-border" />

            {/* Value proposition 2 */}
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-lg bg-sage-50 border border-sage-100 flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Se o sistema trouxer apenas 10 novos clientes recorrentes por
                  mês...
                </h3>
                <p className="font-body text-muted-foreground text-[15px] leading-relaxed">
                  Estamos falando de um potencial de{" "}
                  <strong className="text-foreground font-medium">
                    R$ 24.000 a R$ 96.000
                  </strong>{" "}
                  em faturamento anual adicional. O investimento se paga já nas
                  primeiras semanas.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-border" />

            {/* Price */}
            <div className="rounded-lg bg-background border border-primary/10 p-8 text-center relative overflow-hidden">
              {/* Subtle green gradient at top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <p className="font-body text-[11px] text-muted-foreground mb-4 tracking-[0.2em] uppercase font-medium">
                Investimento mensal
              </p>
              <p className="font-display text-5xl lg:text-6xl font-semibold text-foreground mb-3">
                R$ 3.500
              </p>
              <p className="font-body text-sm text-muted-foreground font-light">
                Menos que o lucro de{" "}
                <strong className="text-foreground font-medium">
                  5 clientes recorrentes
                </strong>{" "}
                por mês.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ValueSection;
