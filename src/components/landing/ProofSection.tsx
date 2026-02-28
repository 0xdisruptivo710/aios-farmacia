import { motion } from "framer-motion";
import { Star, TrendingUp, Quote } from "lucide-react";

const stats = [
  { value: "+327%", label: "Aumento médio em pedidos" },
  { value: "47", label: "Farmácias atendidas" },
  { value: "R$ 2.8M", label: "Em faturamento gerado" },
  { value: "94%", label: "Taxa de renovação" },
];

const testimonials = [
  {
    name: "Dr. Carlos Mendes",
    role: "Proprietário — Farmácia Vida Natural",
    text: "Em 3 meses, saímos de 15 para 52 pedidos por dia. O sistema de recompra mudou completamente nosso fluxo de caixa.",
  },
  {
    name: "Dra. Ana Paula Ribeiro",
    role: "Diretora — Manipulação Saúde & Bem-estar",
    text: "Finalmente temos previsibilidade. Sabemos quantos clientes novos entram e quantos retornam todo mês.",
  },
  {
    name: "Fernando Oliveira",
    role: "Sócio — FarmaCompound",
    text: "O investimento se pagou no primeiro mês. Hoje temos lista de espera para atendimento.",
  },
];

const ProofSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
          Resultados que <span className="text-primary">falam por si</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Farmácias de todo o Brasil já estão crescendo com o nosso sistema.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center p-6 rounded-xl bg-card shadow-card border border-border"
          >
            <div className="text-3xl lg:text-4xl font-serif text-primary font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-6 rounded-xl bg-card shadow-card border border-border relative"
          >
            <Quote className="w-8 h-8 text-gold/30 absolute top-4 right-4" />
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
            <div>
              <div className="font-semibold text-foreground text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
