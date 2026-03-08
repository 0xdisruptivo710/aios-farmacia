import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "+327%", label: "Aumento médio\nem pedidos" },
  { value: "47", label: "Farmácias\natendidas" },
  { value: "R$ 2.8M", label: "Em faturamento\ngerado" },
  { value: "94%", label: "Taxa de\nrenovação" },
];

const testimonials = [
  {
    name: "Dr. Carlos Mendes",
    role: "Proprietário — Farmácia Vida Natural",
    text: "Em 3 meses, saímos de 7 para 25 pedidos por dia. O sistema de recompra mudou completamente nosso fluxo de caixa.",
    initials: "CM",
  },
  {
    name: "Dra. Ana Paula Ribeiro",
    role: "Diretora — Manipulação Saúde & Bem-estar",
    text: "Finalmente temos previsibilidade. Sabemos quantos clientes novos entram e quantos retornam todo mês.",
    initials: "AR",
  },
  {
    name: "Fernando Oliveira",
    role: "Sócio — FarmaCompound",
    text: "O investimento se pagou no primeiro mês. Hoje temos lista de espera para atendimento.",
    initials: "FO",
  },
];

const ProofSection = () => (
  <section className="py-24 lg:py-32 bg-section-warm relative overflow-hidden">
    <div className="absolute top-[20%] right-[-8%] w-[400px] h-[400px] rounded-full bg-bronze-50/50 blur-[100px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-accent mb-5">
          Resultados comprovados
        </span>
        <h2 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-display font-semibold text-foreground mb-4">
          Números que{" "}
          <span className="text-primary italic">falam por si</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto font-light">
          Farmácias de todo o Brasil já estão crescendo com o nosso sistema.
        </p>
      </motion.div>

      {/* Stats row */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="flex flex-col sm:flex-row items-stretch justify-center divide-y sm:divide-y-0 sm:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 text-center py-6 sm:py-0 sm:px-8"
            >
              <div className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-3">
                {stat.value}
              </div>
              <div className="font-body text-sm text-muted-foreground whitespace-pre-line leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="p-7 rounded-lg bg-card border border-border shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-500"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className="w-3.5 h-3.5 fill-accent text-accent"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="font-body text-foreground/85 mb-7 text-[15px] leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-5 border-t border-border">
              <div className="w-9 h-9 rounded-full bg-sage-100 flex items-center justify-center">
                <span className="font-display text-sm font-semibold text-sage-700">
                  {t.initials}
                </span>
              </div>
              <div>
                <div className="font-body font-medium text-foreground text-sm">
                  {t.name}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
