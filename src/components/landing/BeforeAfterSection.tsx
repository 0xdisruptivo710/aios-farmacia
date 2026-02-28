import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

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
  <section className="py-20 lg:py-28 bg-teal-light">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">
          A transformação é <span className="text-primary">visível</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-card border border-destructive/20 shadow-card"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
            <XCircle className="w-4 h-4" /> ANTES
          </div>
          <ul className="space-y-4">
            {before.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-card border border-success/20 shadow-card"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" /> DEPOIS
          </div>
          <ul className="space-y-4">
            {after.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
